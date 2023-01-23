import React from 'react';
import Icon from '@mapbox/mr-ui/icon';
import Tooltip from '@mapbox/mr-ui/tooltip';

export default class BackToTopButton extends React.PureComponent {
  getPopoverContent = (<div className="txt-s">Back to top!</div>);

  render() {
    function handleClick() {
      document.documentElement.scrollTop = 0; // fallback
      window.scroll(0, 0);
    }
    return (
      <div className="mx24 my24 z5">
        <Tooltip content={this.getPopoverContent}>
          <button
            onClick={handleClick}
            className="btn btn--blue w60 h60 round-full shadow-darken25 flex flex--center-main flex--center-cross"
            ariaLabel="Back to top"
          >
            <Icon name="arrow-up" size={30} />
          </button>
        </Tooltip>
      </div>
    );
  }
}
