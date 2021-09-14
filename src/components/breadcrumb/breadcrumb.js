import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import classnames from 'classnames';

export default class Breadcrumb extends React.PureComponent {
  render() {
    const { links, location, themeWrapper } = this.props;
    const secondLastItem = links.length - 2;
    const Link = (props) => {
      const isSecondLastItem = secondLastItem === props.index;
      return (
        <span
          className={classnames('', {
            'none inline-block-mm': !isSecondLastItem
          })}
        >
          {isSecondLastItem && (
            <span className="color-gray-light inline-block none-mm pr6">
              <Icon name="arrow-left" inline={true} />
            </span>
          )}
          <a className="link" href={props.href}>
            {props.children}
          </a>
          <span className="color-gray-light inline-block-mm none px6">
            <Icon name="chevron-right" inline={true} />
          </span>
        </span>
      );
    };

    return links.length > 1 ? (
      <div className={`${themeWrapper}`} data-swiftype-index="false">
        {links.map((link, index) => {
          return link.path !== location.pathname ? (
            <Link key={link.title} href={link.path} index={index}>
              {link.title}
            </Link>
          ) : (
            <span key={link.title} className="color-gray none inline-block-mm">
              {link.title}
            </span>
          );
        })}
      </div>
    ) : null;
  }
}

Breadcrumb.propTypes = {
  /** Array of links to build the breadcrumb */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ),
  /** Current page pathname */
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  /** Assembly classes to apply to the containing wrapper */
  themeWrapper: PropTypes.string
};

Breadcrumb.defaultProps = {
  themeWrapper: ''
};
