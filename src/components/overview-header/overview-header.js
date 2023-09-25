import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import IconText from '@mapbox/mr-ui/icon-text';
import classnames from 'classnames';

import Tag from '../tag/tag';
import { cardBoxShadow } from '../index-card/index-card';

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
      <p>
        {versionEl}
        {changelogLinkEl}
      </p>
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
        className={classnames('block unprose link', {
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
      <span className="ml12 inline-block relative" style={{ top: '-7px' }}>
        <Tag {...tagProps} />
      </span>
    );
  };

  render() {
    const {
      features,
      theme = '',
      lightText,
      title,
      tag,
      description,
      image,
      highlightColor,
      card,
      titleIcon
    } = this.props;

    const featuresList =
      features &&
      features.map((feature) => (
        <li key={feature} className="flex">
          <div
            className={classnames('flex-child-no-shrink mr6', {
              'color-gray': !lightText,
              'color-white': lightText
            })}
          >
            <Icon name="check" inline={true} />
          </div>
          <div className="flex-child-grow">{feature}</div>
        </li>
      ));

    const overviewHeaderContent = (
      <div
        className={classnames(
          `dr-ui--overview-header prose pr60-mxl ${theme}`,
          {
            'border-b border--gray-light': !theme && !card,
            round: theme,
            'py12 px24': theme || card,
            'color-white': lightText,
            mb24: !card,
            mb12: card
          }
        )}
      >
        <div className="flex flex--center-cross">
          <div className="flex-child-grow">
            <div className="flex flex--center-cross flex--row-reverse flex--end-main">
              <h1 className="mb6 txt-fancy">
                {title}
                {tag && this.buildTag(this.props)}
              </h1>
              {titleIcon && (
                <div
                  className="mr18 w36 h36 relative"
                >
                  {titleIcon}
                </div>
              )}
            </div>
            {description && (
              <p className="txt-l txt-fancy-regular color-gray-deep">
                {description}
              </p>
            )}
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

    if (card) {
      return (
        <div
          className="flex overflow-hidden round-bold mt18 mb30"
          style={{ boxShadow: cardBoxShadow }}
        >
          {card && (
            <div
              className={`flex-child-no-shrink bg-${highlightColor}`}
              style={{ width: 7 }}
            ></div>
          )}
          {overviewHeaderContent}
        </div>
      );
    }

    return overviewHeaderContent;
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
  /** an image to display to the left of the title, used in the help docs */
  titleIcon: PropTypes.node,
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
  lightText: PropTypes.bool,
  /** The highlight color, adds a thin colored line to the left used in the help docs */
  highlightColor: PropTypes.string,
  /**  If `true`, render a card-style container with shadow, used in the help docs*/
  card: PropTypes.bool
};

export default OverviewHeader;
