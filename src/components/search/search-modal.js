import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import Icon from '@mapbox/mr-ui/icon';
import getWindow from '@mapbox/mr-ui/utils/get-window';

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setDialogEl = this.setDialogEl.bind(this);
  }

  componentDidMount() {
    if (!this.dialogEl || typeof window === 'undefined') return;
    this.scrollTimeout = getWindow().setTimeout(() => {
      const offsetParent = this.dialogEl.offsetParent;
      if (offsetParent.tagName === 'BODY' || offsetParent.tagName === 'HTML') {
        return;
      }
      offsetParent.scrollTop = 0;
    }, 0);
  }

  componentWillUnmount() {
    if (typeof window === 'undefined') return;
    getWindow().clearTimeout(this.scrollTimeout);
  }

  setDialogEl(el) {
    this.dialogEl = el;
  }

  render() {
    const { props } = this;

    let closeButton = null;
    if (props.onExit) {
      closeButton = (
        <div className="absolute top right mt12">
          <button
            type="button"
            className="btn btn--white color-gray mr6"
            onClick={props.onExit}
            data-test="modal-close"
          >
            <Icon name="close" size={24} />
          </button>
        </div>
      );
    }

    const dialogBody = (
      <div
        ref={this.setDialogEl}
        className="relative wmax-full w600 bg-white round px0 py0"
      >
        {props.children}
        {closeButton}
      </div>
    );

    const modalProps = {
      titleText: props.accessibleTitle,
      getApplicationNode: props.getApplicationNode,
      underlayProps: { 'data-popover-ignore-clicks': true },
      underlayClass: 'px12 py12 px60-mm py60-mm ',
      underlayStyle: {
        zIndex: 4,
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(0,0,0,.2)'
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
  children: PropTypes.node.isRequired
};

Modal.defaultProps = {
  getApplicationNode: () => document.getElementById('app')
};
