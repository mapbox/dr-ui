import React from 'react';
import IconButton from '@mapbox/mr-ui/icon-button';

export default class BackToTopButton extends React.Component {
  render() {
    return (
      <div className="block mx24 my24 z5">
        <IconButton
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
          icon="arrow-up"
          tooltipProps={{
            content: 'Back to top',
            respondsToClick: false,
            receivesFocus: false
          }}
          themeIcon="w36 h36 mx-auto"
          themeButton="btn--blue w60 h60 px0 round-full shadow-darken25"
        />
      </div>
    );
  }
}

// {/* none-mm fixed bottom right */}
