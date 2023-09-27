import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setDialogEl = this.setDialogEl.bind(this);
  }

  componentDidMount() {
    if (!this.dialogEl || typeof window === 'undefined') return;
    this.scrollTimeout = window.setTimeout(() => {
      const offsetParent = this.dialogEl.offsetParent;
      if (offsetParent.tagName === 'BODY' || offsetParent.tagName === 'HTML') {
        return;
      }
      offsetParent.scrollTop = 0;
    }, 0);
  }

  componentWillUnmount() {
    if (typeof window === 'undefined') return;
    window.clearTimeout(this.scrollTimeout);
  }

  setDialogEl(el) {
    this.dialogEl = el;
  }

  render() {
    const { props } = this;

    const dialogBody = (
      <div
        ref={this.setDialogEl}
        className="relative wmax-full w600 bg-white round px0 py0"
      >
        {props.children}
      </div>
    );

    const modalProps = {
      titleText: props.accessibleTitle,
      getApplicationNode: props.getApplicationNode,
      underlayProps: { 'data-popover-ignore-clicks': true },
      underlayClass: 'px60 py120 ',
      underlayStyle: {
        zIndex: 10,
        backgroundColor: 'rgba(14,33,39,.5)'
      }
    };

    if (props.onExit) {
      modalProps.onExit = props.onExit;
    }

    if (props.initialFocus) {
      modalProps.initialFocus = props.initialFocus;
    } else {
      modalProps.focusDialog = true;
    }

    return <AriaModal {...modalProps}>{dialogBody}</AriaModal>;
  }
}

Modal.propTypes = {
  accessibleTitle: PropTypes.string.isRequired,
  onExit: PropTypes.func,
  getApplicationNode: PropTypes.func,
  initialFocus: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Modal.defaultProps = {
  getApplicationNode: () => document.getElementById('app')
};
