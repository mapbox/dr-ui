/* eslint-disable react/no-danger */
import React from 'react';
import CodeSnippet from '../../../src/components/code-snippet';
import { highlightJsx } from '../../../src/components/highlight/jsx';

function decodeJsx(x) {
  return x.replace(/&#96;/g, '`').replace(/&#36;/g, /\$/);
}

export default class ComponentExample extends React.Component {
  state = {
    showCode: false
  };

  toggleCode = () => {
    this.setState((state) => ({ showCode: !state.showCode }));
  };

  renderCode() {
    if (!this.state.showCode) {
      return null;
    }
    return (
      <div className="border border--gray-light round-tl">
        <CodeSnippet
          code={decodeJsx(this.props.code)}
          highlighter={highlightJsx}
        />
      </div>
    );
  }

  render() {
    const { props, state } = this;
    return (
      <div>
        <div className="flex-parent flex-parent--end-cross">
          <div className="flex-child flex-child--grow pb6 prose">
            {props.description}
          </div>
          <div className="flex-child flex-child--no-shrink w120">
            <div className="flex-parent flex-parent--end-main">
              <div className="flex-child">
                <ToggleCodeButton
                  onClick={this.toggleCode}
                  codeIsVisible={state.showCode}
                />
              </div>
            </div>
          </div>
        </div>
        {this.renderCode()}
        <div
          className={`component-example-${props.title.toLowerCase()} border border--gray-light px24 py24 ${
            this.state.showCode ? 'round-b border-t--0' : 'round-b round-tl '
          }`}
        >
          {React.createElement(props.exampleModule.default)}
        </div>
      </div>
    );
  }
}

function ToggleCodeButton(props) {
  const text = props.codeIsVisible ? 'Hide code' : 'Show code';
  return (
    <button
      className="block btn btn--s btn--gray unround-b round-t"
      onClick={props.onClick}
    >
      <span className="flex-parent flex-parent--center-cross">
        <span className="flex-child">
          <svg className="icon">
            <use xlinkHref="#icon-code" />
          </svg>
        </span>
        <span className="ml6 flex-child">{text}</span>
      </span>
    </button>
  );
}
