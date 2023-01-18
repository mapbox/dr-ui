import React from 'react';
import Button from '@mapbox/mr-ui/button';
import Icon from '@mapbox/mr-ui/icon';
import PopoverTrigger from '@mapbox/mr-ui/popover';

export default class BackToTopButton extends React.PureComponent {
  getPopoverContent = () => {
    return <div className="txt-s">Back to top!</div>;
  };
  render() {
    function handleClick() {
      document.documentElement.scrollTop = 0; // fallback
      window.scroll(0, 0);
    }
    return (
      <div className="mx24 my24 z5">
        <PopoverTrigger
          respondsToClick={false}
          respondsToHover={true}
          content={this.getPopoverContent}
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
                'btn btn--blue w60 h60 round-full shadow-darken25 flex flex--center-main flex--center-cross',
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
