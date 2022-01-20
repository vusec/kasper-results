import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import MUIDataTable from 'mui-datatables';

import RestartDetails from './RestartDetails';

const columns = [
  { name: 'checkpoint_ip', label: 'Checkpoint IP',
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <pre style={{ fontSize: 12 }}>{value}</pre> }
    }
  },
  { name: 'checkpoint_ip', label: 'Checkpoint IP', options: { filter: false, display: 'excluded' } },
  { name: 'checkpoint_func_offset', label: 'func offset',
    options: { filter: false, customBodyRender: value => value ? value.replace('dfs$', '') : null }
  },
  { name: 'checkpoint_func_offset', label: 'func offset', options: { filter: false, display: 'excluded' } },
  { name: 'calltrace', label: 'Calltrace', options: { filter: false, display: 'excluded' } },
  { name: 'report_types', label: 'Report Types', options: {
    filter: false,
    customBodyRender: value => value ? value.join(', ') : null,
  }},
  { name: 'report_types', label: 'Report Types', options: { filter: false, display: 'excluded' } },
  { name: 'bug_types', label: 'Bug Types', options: {
    filter: false,
    customBodyRender: value => value ? value.join(', ') : null,
  }},
  { name: 'bug_types', label: 'Bug Types', options: { filter: false, display: 'excluded' } },
  { name: 'specv1only', label: 'Specv1Only', options: {
    display: 'excluded', filter: true, filterType: 'checkbox',
  }},
  { name: 'reports', label: 'Reports', options: {
    filter: false, display: 'false',
  }},
];
const column_indices = columns.map(c => c.name).reduce((dict, element, index) => {
  dict[element] = index;
  return dict;
}, {});

class Restarts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restarts: null,
      rowsPerPage: 20,
      isLoading: false,
      appliedFilters: { },
      page: 0,
      count: 1, // total elements
    };
  }

	componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ restarts: [{ ip: 1, specv1only: false }] });
    const { appliedFilters, rowsPerPage, page } = this.state;
    const order = ['checkpoint_func_offset'];
    const ascending = [true];
    this.setState({ isLoading: true });
    fetch('/api/restarts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filters: appliedFilters, order, ascending, page, rowsPerPage }),
    }).then(res => res.json()).then(data => {
      const { restarts, total } = data;
      this.setState({
        isLoading: false,
        restarts: restarts.map(r => ({...r, specv1only: false })),
        count: total,
      });
    });
  }

  renderExpandableRow(rowData, rowMeta) {
    const colSpan = rowData.length + 1;
    const restart = columns.map(col => col.name).reduce((dict, columnName, index) => {
      dict[columnName] = rowData[index];
      return dict;
    }, {});
    return (
      <RestartDetails colSpan={colSpan}
        restart={restart} />
    )
  }

  handleFilterSubmit(applyFilters) {
    const filterList = applyFilters();
    const filters = {};
    if (filterList[column_indices['specv1only']].length > 0) {
      filters['specv1only'] = 1;
    }
    this.setState({ page: 0, appliedFilters: filters }, () => this.getData());
  }

  render() {
    const { restarts, count, isLoading, rowsPerPage, page } = this.state;

    if (!restarts) return null;

    const options = {
      count,
      page,
      filterType: 'multiselect',
      selectableRows: 'none',
      expandableRows: true,
      renderExpandableRow: this.renderExpandableRow.bind(this),
      print: false,
      search: false,
      sort: false,
      rowsPerPage,
      rowsPerPageOptions: [],

      serverSide: true,
      confirmFilters: true,
      customFilterDialogFooter: (currentFilterList, applyNewFilters) => {
        return (<div style={{marginTop: '40px' }}>
          <Button variant="contained" onClick={() =>
            this.handleFilterSubmit(applyNewFilters)}>
            Apply Filters
          </Button>
        </div>);
      },
      onFilterChange: (column, filterList, type) => {
        if (type === 'chip' || type === 'custom') {
          var newFilters = () => (filterList);
          this.handleFilterSubmit(newFilters);
        }
      },
      onTableChange: (action, tableState) => {
        switch (action) {
          case 'changePage':
            this.setState({ page: tableState.page }, () => this.getData());
            break;
          default:
            break;
        }
      },
    };

    const title =
      <Typography variant='h4'>
        Restarts
        {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
      </Typography>

    return (
      <div>
        <MUIDataTable
          title={title}
          data={restarts}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default Restarts;
