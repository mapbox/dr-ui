import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/react-icon';

class OverviewHeader extends React.PureComponent {
  render() {
    const { props } = this;

    const featuresList = props.sdkFeatures.map((feature, index) => {
      return (
        <li key={index} className="ml-neg24 flex-parent">
          <div className="flex-child flex-child--no-shrink mr6 m3">
            <Icon name="check" themeIcon="color-gray-light" inline={true} />
          </div>
          <div className="flex-child flex-child--grow">{feature}</div>
        </li>
      );
    });

    return (
      <div className="scroll-hidden border-b border--gray-light prose">
        <h1 className="mb6 txt-fancy">{props.productName}</h1>
        <div className="relative">
          <div className="pr12-ml mr240-ml mr0">
            <p>
              Current version: v{props.version}{' '}
              <a href={props.changelogLink}>View changelog</a>
            </p>
            <ul className="mb24" style={{ listStyle: 'none' }}>
              {featuresList}
            </ul>
            <div className="mb24">
              <a
                href={props.installLink}
                className="btn txt-l round inline-block color-white unprose"
              >
                Install
              </a>
              <a href={props.ghLink} className="inline-block ml24 unprose link">
                <span className="flex-parent flex-parent--center-cross">
                  <span className="flex-child mr6">
                    <Icon name="github" inline={true} />
                  </span>
                  <span className="flex-child">Contribute on GitHub</span>
                </span>
              </a>
            </div>
          </div>
          <div className="none block-ml w240 absolute right top">
            {props.image}
          </div>
        </div>
      </div>
    );
  }
}

OverviewHeader.propTypes = {
  sdkFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
  productName: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  changelogLink: PropTypes.string.isRequired,
  installLink: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired
};

export default OverviewHeader;
