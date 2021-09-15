import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import IconText from '@mapbox/mr-ui/icon-text';
import classnames from 'classnames';
import Tag from '../tag/tag';

class OverviewHeader extends React.PureComponent {
  renderVersion() {
    const { version, changelogLink, lightText } = this.props;

    const versionEl = version !== undefined && (
      <span className="mr6">
        Current version: <code>v{version}</code>
      </span>
    );

    const changelogLinkEl = changelogLink && (
      <a
        className={classnames('unprose link txt-underline', {
          'link--white': lightText
        })}
        href={changelogLink}
      >
        View changelog
      </a>
    );

    if (!versionEl && !changelogLinkEl) {
      return null;
    }

    return (
      <div className="mb12">
        {versionEl}
        {changelogLinkEl}
      </div>
    );
  }

  renderFooter() {
    const { lightText, installLink, ghLink, contactLink } = this.props;

    const btnClasses = classnames('btn round unprose mr12 mb3', {
      'btn--white color-gray-dark': lightText,
      'btn--blue': !lightText
    });

    const installLinkEl = installLink && (
      <a href={installLink} className={btnClasses}>
        Install
      </a>
    );

    const ghLinkEl = ghLink && (
      <a
        href={ghLink}
        className={classnames('unprose link block', {
          'link--white': lightText
        })}
      >
        <IconText iconBefore="github" inline={true}>
          Contribute on GitHub
        </IconText>
      </a>
    );

    const contactLinkEl = contactLink && (
      <a href={contactLink} className={btnClasses}>
        Contact us
      </a>
    );

    if (!installLinkEl && !ghLinkEl && !contactLinkEl) {
      return null;
    }

    return (
      <div className="mb24 flex-mm flex--center-cross">
        {installLinkEl}
        {contactLinkEl}
        {ghLinkEl}
      </div>
    );
  }

  buildTag = () => {
    const { tag, customTagProps } = this.props;
    const tagProps = {
      theme: tag,
      ...customTagProps
    };
    return (
      <span className="ml12 inline-block relative" style={{ top: -7 }}>
        <Tag {...tagProps} />
      </span>
    );
  };

  render() {
    const { features, theme, lightText, title, tag, description, image } =
      this.props;

    const featuresList =
      features &&
      features.map((feature) => (
        <li key={feature} className="flex">
          <div className="flex-child-no-shrink mr6 color-gray">
            <Icon name="check" inline={true} />
          </div>
          <div className="flex-child-grow">{feature}</div>
        </li>
      ));

    return (
      <div
        className={classnames(
          `dr-ui--overview-header prose mb24 pr60-mxl ${theme}`,
          {
            'border-b border--darken10': !theme,
            'round py12 px24': theme,
            'color-white': lightText
          }
        )}
      >
        <div className="flex flex--center-cross">
          <div className="flex-child-grow">
            <h1 className="mb6 txt-fancy">
              {title}
              {tag && this.buildTag(this.props)}
            </h1>
            {description && <p className="txt-l">{description}</p>}
            {this.renderVersion()}

            {featuresList && <ul className="unprose mb18">{featuresList}</ul>}
            {this.renderFooter()}
          </div>
          {image && (
            <div className="flex-child-ml flex-child-no-shrink w300-mxl align-r">
              <div className="none block-mxl">{image}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

OverviewHeader.defaultProps = {
  lightText: false
};

OverviewHeader.propTypes = {
  /** features of the product */
  features: PropTypes.arrayOf(PropTypes.string),
  /** description of the product */
  description: PropTypes.string,
  /** title of the product */
  title: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(['legacy', 'beta', 'fundamentals', 'new', 'custom']),
  /* Required if tag is set to `custom` */
  customTagProps: PropTypes.shape({
    customLabel: PropTypes.string.isRequired,
    customTooltipText: PropTypes.string.isRequired,
    customBackground: PropTypes.string.isRequired,
    customColor: PropTypes.string.isRequired,
    customBorder: PropTypes.string.isRequired
  }),
  /** image of the product */
  image: PropTypes.node,
  /** version number of the product */
  version: PropTypes.string,
  /** creates a "View changelog" link */
  changelogLink: PropTypes.string,
  /** creates an "Install" button */
  installLink: PropTypes.string,
  /** creates a "Contribute on GitHub" link */
  ghLink: PropTypes.string,
  /** creates a "Contact us" button */
  contactLink: PropTypes.string,
  /** Classes to apply to the OverviewHeader containter, usually an Assembly background color: https://labs.mapbox.com/assembly/documentation/#Background-colors */
  theme: PropTypes.string,
  /** If `true`, the component will use white text */
  lightText: PropTypes.bool
};

export default OverviewHeader;
