import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';

class ToggleableCodeBlock extends React.Component {
  constructor(props) {
    super(props);
    let prefLanguage = 'swift';
    if (prefLanguage !== 'swift' && prefLanguage !== 'objective-c') {
      prefLanguage = 'swift';
    }
    this.state = {
      toggleValue: prefLanguage
    };
  }

  render() {
    const { props } = this;
    const currentCodeSnippet = props.codeSnippet.filter(snippet => {
      return snippet.preferredLanguage === true;
    })[0];
    const renderedCodeBlock = (
      <CodeSnippet
        style={{ background: '#273d56' }}
        code={currentCodeSnippet.rawCode}
        highlightedCode={currentCodeSnippet.highlightedCode}
        maxHeight={480}
        onCopy={() => {}}
      />
    );
    return <div>{renderedCodeBlock}</div>;
  }
}

ToggleableCodeBlock.propTypes = {
  codeSnippet: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.oneOf([
        'swift',
        'objective-c',
        'java',
        'kotlin',
        'javascript'
      ]),
      rawCode: PropTypes.string.isRequired,
      highlightedCode: PropTypes.string.isRequired,
      preferredLanguage: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default ToggleableCodeBlock;
