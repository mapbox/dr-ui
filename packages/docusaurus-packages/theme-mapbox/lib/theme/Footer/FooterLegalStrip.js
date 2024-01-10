import React from 'react';
import PropTypes from 'prop-types';

function FooterLegalStrip(props) {
  return (
    <div className={props.className}>
      <a
        className="link color-gray-deep color-gray-dark-on-hover mr18 txt-nowrap mb6"
        href="https://www.mapbox.com/"
      >
        © Mapbox All Rights Reserved
      </a>
      <a
        className="link color-gray-deep color-gray-dark-on-hover mr18 txt-nowrap mb6"
        href="https://www.mapbox.com/tos/"
      >
        Terms
      </a>
      <a
        className="link color-gray-deep color-gray-dark-on-hover mr18 txt-nowrap mb6"
        href="https://www.mapbox.com/privacy/"
      >
        Privacy
      </a>
      <a
        className="link color-gray-deep color-gray-dark-on-hover mr18 txt-nowrap mb6"
        href="https://www.mapbox.com/platform/security/"
      >
        Security
      </a>
      <a
        className="link color-gray-deep color-gray-dark-on-hover txt-nowrap mb6"
        href="https://www.mapbox.com/legal/cookies"
      >
        Your California Privacy Choices
      </a>
    </div>
  );
}

FooterLegalStrip.propTypes = {
  className: PropTypes.string
};

export default FooterLegalStrip;
