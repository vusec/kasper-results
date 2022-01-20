import React from 'react';
import ReactDOM from 'react-dom';

import Highlight, { defaultProps } from "prism-react-renderer";
import githubTheme from "prism-react-renderer/themes/github";

const bootlinHost = 'https://elixir.bootlin.com/linux/v4.19.132/source'

class FAddr2line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { faddr2line } = this.props;
    let faddr2lineElements = null;

    if (faddr2line) {
      faddr2lineElements = faddr2line.map(faddr2lineElem => {
        const [ func, file, line, extract ] = faddr2lineElem;
        const bootlinLink = `${bootlinHost}/${file}#L${line}`;
        const code = extract.join("\n");
        return (
          <div>
          <pre>
          {func} in <a href={bootlinLink} target="_blank">{file}</a>
          </pre>
          <Highlight {...defaultProps} code={code} language="c" theme={githubTheme}
          style={{ paddingTop: 10}}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{...style, paddingTop: 10 }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
              </div>
            ))}
            </pre>
          )}
          </Highlight>
          </div>);
      })
    }
    return faddr2lineElements;
  }
}

export default FAddr2line;
