import React from 'react';
import ReactDOM from 'react-dom';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import convertSyscallNrToName from './ConvertSyscallNrToName';
import RestartReportDetails from './RestartReportDetails';
import FAddr2line from './faddr2line';

class RestartDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      checkpointLineInfo: null,
    }
  }

  componentDidMount() {
    const { restart } = this.props;
    const { checkpoint_func_offset } = restart;
    this.setState({ isLoading: true });

    fetch('/api/line_info?' + new URLSearchParams({
      func_offset: checkpoint_func_offset,
    })).then(res => res.json()).then(data => {
      this.setState({
        isLoading: false,
        checkpointLineInfo: data,
      });
    });
  }

  render() {
    const { colSpan, restart } = this.props;
    const { checkpointLineInfo } = this.state;
    const { restart_ids, reports } = restart;

    const columns = [
      { name: 'ip', label: 'IP' },
      { name: 'func_offset', label: 'Func Offset' },
      { name: 'report_type', label: 'Report Type' },
      { name: 'bug_types', label: 'Bug Types',
        customRender: (bug_types) => {
          return bug_types.join(', ');
        },
      },
      { name: 'size', label: 'Size' },
      { name: 'read_write', label: 'Read/Write' },
    ];

    let calltrace = null;
    if (restart && restart.calltrace) {
      calltrace = restart.calltrace.filter(line => !line.startsWith('kspecem_'));
    }

    if (!reports) return null;

    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          <Typography variant='h6'>
            Calltrace
          </Typography>
          <pre>{calltrace}</pre>
          {checkpointLineInfo && <>
            <Typography variant='h6'>
              Checkpoint Line Info
            </Typography>
            <FAddr2line faddr2line={checkpointLineInfo}/>
          </>}
          <Typography variant='h6'>
            Reports
          </Typography>
          <TableRow>
            <TableCell></TableCell>
            {columns.map(col => <TableCell>{col.label}</TableCell>)}
          </TableRow>
          {reports.map(report =>
            <RestartReportDetails columns={columns} report={report}/>
          )}
        </TableCell>
      </TableRow>
    );
  }
}

export default RestartDetails;
