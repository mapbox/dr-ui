import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

export default class Breadcrumb extends React.Component {
  render() {
    const { links, location, themeWrapper } = this.props;

    const Link = (props) => (
      <React.Fragment>
        <a className="link" href={props.href}>
          {props.children}
        </a>
        <span className="color-gray-light inline-block px6">
          <Icon name="chevron-right" inline={true} />
        </span>
      </React.Fragment>
    );

    return links.length > 1 ? (
      <div
        className={`dr-ui--breadcrumb ${themeWrapper}`}
        data-swiftype-index="false"
      >
        {links.map((link) => {
          return link.path !== location.pathname ? (
            <Link key={link.title} href={link.path}>
              {link.title}
            </Link>
          ) : (
            <span key={link.title} className="color-gray">
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
