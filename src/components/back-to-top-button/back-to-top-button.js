import React from 'react';
import Button from '@mapbox/mr-ui/button';
import Icon from '@mapbox/mr-ui/icon';
import PopoverTrigger from '@mapbox/mr-ui/popover-trigger';

export default class BackToTopButton extends React.Component {
  render() {
    function handleClick() {
      document.documentElement.scrollTop = 0; // fallback
      window.scroll(0, 0);
    }
    return (
      <div className="block mx24 my24 z5">
        <PopoverTrigger
          respondsToClick={false}
          respondsToHover={true}
          content={<div className="txt-s">Back to top!</div>}
          popoverProps={{
            alignment: 'center',
            placement: 'top',
            padding: 'small'
          }}
        >
          <Button
            onClick={handleClick}
            passthroughProps={{
              className:
                'btn--blue w60 h60 px0 round-full shadow-darken25 color-white flex-parent flex-parent--center-main flex-parent--center-cross',
              'aria-label': 'Back to top'
            }}
          >
            <Icon name="arrow-up" size={30} />
          </Button>
        </PopoverTrigger>
      </div>
    );
  }
}
