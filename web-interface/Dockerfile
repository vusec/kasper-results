FROM node:16.13.1
RUN apt-get update || : && apt-get install python3 python3-pip -y

WORKDIR /app
COPY ./frontend /app/frontend
COPY ./backend  /app/backend

WORKDIR /app/frontend
RUN npm install
RUN npm run build
RUN cp dist/bundle.js /app/backend/static

WORKDIR /app/backend
RUN pip3 install -r requirements.txt
CMD [ "python3", "app.py" ]
