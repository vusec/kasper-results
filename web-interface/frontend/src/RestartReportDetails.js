import React from 'react';
import ReactDOM from 'react-dom';

import { withStyles } from '@mui/styles';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FAddr2line from './faddr2line';
import renderTaintInfo from './taintInfo';

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
})

class RestartReportDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      reportExpanded: false,
      funcOffsetLineInfo: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const { report } = this.props;
    const { func_offset } = report;
    fetch('/api/line_info?' + new URLSearchParams({
      func_offset,
    })).then(res => res.json()).then(data => {
      this.setState({
        isLoading: false,
        funcOffsetLineInfo: data,
      });
    });
  }

  render() {
    const { classes, columns, report } = this.props;
    const { funcOffsetLineInfo, reportExpanded } = this.state;
    let { ptr_labels, data_labels } = report;

    if (!report) return null;

    data_labels = data_labels.map((d_labels, idx) => {
      if (d_labels.length > 0) {
        const d_labels_text = d_labels.map(label =>
          <pre> * {renderTaintInfo(label, true)}</pre>);
        return <pre>data_labels {idx}: {d_labels_text}</pre>
      }
      return '';
    });
    ptr_labels = ptr_labels.map((p_labels, idx) => {
      if (p_labels.length > 0) {
        const p_labels_text =  p_labels.map(label =>
          <pre> * {renderTaintInfo(label, true)}</pre>);
        return <pre>ptr_labels {idx}: {p_labels_text}</pre>
      }
      return '';
    });

    return (
      <>
        <TableRow>
          <TableCell>
            <IconButton
              className={classes.expand} onClick={() => {
                this.setState({ reportExpanded: !reportExpanded })
              }}>
              <ExpandMoreIcon />
            </IconButton>
          </TableCell>
          {columns.map(col =>
            <TableCell>
              {col.customRender ? col.customRender(report[col.name]) : report[col.name]}
            </TableCell>)}
        </TableRow>
        <Collapse in={reportExpanded} timeout="auto" unmountOnExit>
          <pre>data labels:    {data_labels}</pre>
          <pre>pointer labels: {ptr_labels}</pre>
          {funcOffsetLineInfo && <FAddr2line faddr2line={funcOffsetLineInfo}/>}
        </Collapse>
      </>
    );
  }
}

export default withStyles(styles)(RestartReportDetails);
