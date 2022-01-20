import copy, os, json
from collections import OrderedDict
from waitress import serve
from flask import Flask, render_template, redirect, url_for, request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, current_user, login_user, logout_user, login_required
import pymongo

from forms import LoginForm

SERVER_AUTH_USER = os.environ.get('SERVER_AUTH_USER') or 'spectops'
SERVER_AUTH_PASSWORD = generate_password_hash(os.environ.get('SERVER_AUTH_PASSWORD') or 'res12ertds345')
MONGO_URI = os.environ.get('MONGO_URI')

def verify_password(username, password):
    if username == SERVER_AUTH_USER and \
            check_password_hash(SERVER_AUTH_PASSWORD, password):
        user = User()
        user.id = username
        return user
    return None

app = Flask(__name__)
app.config.update(
    DEBUG=False,
    TESTING=False,
    CSRF_ENABLED=True,
    SECRET_KEY=b'1kX1PsH2l0cP3mGnKDjXg1^thwQ12l'
)
login = LoginManager(app)

client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=1)
db = client.kasper

class User(UserMixin):
    pass

@login.user_loader
def load_user(_id):
    if _id != SERVER_AUTH_USER:
        return
    user = User()
    user.id = _id
    return user

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect('/')
    form = LoginForm()
    if form.validate_on_submit():
        user = verify_password(form.username.data, form.password.data)
        if not user:
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        return redirect('/')
    return render_template('login.html', title='Sign In', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/')
def root():
    if not current_user.is_authenticated:
        return redirect('/login')
    return app.send_static_file('index.html')

@app.route('/bundle.js')
def bundle():
    return app.send_static_file('bundle.js')

@app.route('/api/line_info')
@login_required
def api_line_info():
    func_offset = request.args.get('func_offset')
    line_info = db.line_infos.find_one(func_offset)
    if line_info:
        return json.dumps(line_info['line_info'])
    return '[]'

@app.route('/api/restarts', methods=['POST'])
@login_required
def api_restarts():
    data = request.json

    filters = data['filters'] if 'filters' in data else {}
    order = data['order'] if 'order' in data else ['checkpoint_func_offset']
    ascending = data['ascending'] if 'ascending' in data else [True]
    page = data['page'] if 'page' in data else 0
    rowsPerPage = data['rowsPerPage'] if 'rowsPerPage' in data else 10
    offset = page * rowsPerPage if page and rowsPerPage else 0

    pipeline = []

    if filters and 'specv1only' in filters:
        pipeline.extend([
            { "$match": { "_id.report_type" : "CACHE" } },
        ])

    pipeline.extend([
        { "$unwind": "$checkpoint_func_offsets" },
        { "$group":  {
            "_id": "$checkpoint_func_offsets",
            "checkpoint_func_offset": { "$first": "$checkpoint_func_offsets" },
            "checkpoint_ip": { "$first": "$checkpoint_ips" },
            "calltraces": { "$addToSet": "$calltraces" },
            "report_types": { "$addToSet": "$_id.report_type" },
            "ptr_labels": { "$addToSet": "$ptr_labels" },
            "reports": { "$push": "$$ROOT"}
        } },
        { "$unset": [
            "reports.calltraces", "reports.checkpoint_func_offsets",
            "reports.restart_ids"
        ] },
    ])

    sorts = OrderedDict()
    for idx, elem in enumerate(order):
        sort_order = 1 if ascending[idx] else -1
        sorts[elem] = sort_order

    agg_pipeline = copy.deepcopy(pipeline)
    agg_pipeline.extend([
        { "$sort": sorts },
        { "$limit": rowsPerPage },
        { "$skip": offset },
    ])

    restarts = [r for r in db.reports.aggregate(agg_pipeline, allowDiskUse=True)]

    # TODO: currently only show one calltrace in the web-server
    def get_calltrace(restart):
        restart['calltrace'] = restart['calltraces'][0][0]
        return restart
    restarts = [get_calltrace(r) for r in restarts]

    def get_report_types(restart):
        for report in restart['reports']:
            report['report_type'] = report['_id']['report_type']
        return restart

    restarts = [get_report_types(r) for r in restarts]

    pipeline.append({ "$count": "total" })
    total = db.reports.aggregate(pipeline, allowDiskUse=True).next()['total']

    return json.dumps({
        "total": total,
        "restarts": restarts
    })

if __name__ == '__main__':
    serve(app, host="0.0.0.0", port=5001)
