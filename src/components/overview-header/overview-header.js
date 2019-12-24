import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import Tag from '../tag/tag';

class OverviewHeader extends React.PureComponent {
  renderVersion() {
    const { props } = this;

    const versionEl = props.version !== undefined && (
      <span>
        Current version: <code>v{props.version}</code>{' '}
      </span>
    );

    const changelogLinkEl = props.changelogLink && (
      <a href={props.changelogLink}>View changelog</a>
    );

    if (!versionEl && !changelogLinkEl) {
      return null;
    }

    return (
      <p>
        {versionEl}
        {changelogLinkEl}
      </p>
    );
  }

  renderFooter() {
    const { props } = this;

    const installLinkEl = props.installLink && (
      <a
        href={props.installLink}
        className="btn txt-l round inline-block color-white unprose mr24"
      >
        Install
      </a>
    );

    const ghLinkEl = props.ghLink && (
      <a href={props.ghLink} className="inline-block unprose link">
        <span className="flex-parent flex-parent--center-cross">
          <span className="flex-child mr6">
            <Icon name="github" inline={true} />
          </span>
          <span className="flex-child">Contribute on GitHub</span>
        </span>
      </a>
    );

    const contactLinkEl = props.contactLink && (
      <a
        href={props.contactLink}
        className="btn txt-l round inline-block color-white unprose mr24"
      >
        Contact us
      </a>
    );

    if (!installLinkEl && !ghLinkEl && !contactLinkEl) {
      return null;
    }

    return (
      <div className="mb24">
        {installLinkEl}
        {contactLinkEl}
        {ghLinkEl}
      </div>
    );
  }

  buildTag = item => {
    const tagProps = {
      theme: item.tag,
      customLabel: item.customTagProps
        ? item.customTagProps.customLabel
        : undefined,
      customTooltipText: item.customTagProps
        ? item.customTagProps.customTooltipText
        : undefined,
      customStyles: item.customTagProps
        ? item.customTagProps.customStyles
        : undefined
    };
    return (
      <span className="ml12 inline-block relative" style={{ top: '-7px' }}>
        <Tag {...tagProps} />
      </span>
    );
  };

  render() {
    const { props } = this;

    const featuresList = props.features.map((feature, index) => {
      return (
        <li key={index} className="ml-neg24 flex-parent">
          <div className="flex-child flex-child--no-shrink mr6 m3 color-gray-light">
            <Icon name="check" inline={true} />
          </div>
          <div className="flex-child flex-child--grow">{feature}</div>
        </li>
      );
    });

    return (
      <div className="scroll-hidden border-b border--gray-light prose mb24">
        <h1 className="mb6 txt-fancy">
          {props.title}
          {props.tag && this.buildTag(props)}
        </h1>
        <div className="relative">
          <div className="pr12-ml mr240-ml mr0">
            {this.renderVersion()}
            <ul className="mb24" style={{ listStyle: 'none' }}>
              {featuresList}
            </ul>
            {this.renderFooter()}
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
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(['legacy', 'beta', 'fundamentals', 'new', 'custom']),
  /* Required if tag is set to `custom` */
  customTagProps: PropTypes.shape({
    customLabel: PropTypes.string.isRequired,
    customTooltipText: PropTypes.string.isRequired,
    customStyles: PropTypes.shape({
      background: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired
    }).isRequired
  }),
  image: PropTypes.node.isRequired,
  version: PropTypes.string,
  changelogLink: PropTypes.string, // creates a "View changelog" link
  installLink: PropTypes.string, // creates a "Install" button
  ghLink: PropTypes.string, // creates a "Contribute on GitHub" link
  contactLink: PropTypes.string // creates a "Contact us" button
};

export default OverviewHeader;
