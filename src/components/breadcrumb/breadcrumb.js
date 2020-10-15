import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import { createUniqueCrumbs } from './utils';

export default class Breadcrumb extends React.Component {
  render() {
    const { domain, links, location, themeWrapper } = this.props;

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

    const createLinks = createUniqueCrumbs([
      ...(domain !== false ? [domain] : []),
      ...(links ? links : [])
    ]);

    return createLinks.length > 1 ? (
      <div
        className={`dr-ui--breadcrumb ${themeWrapper}`}
        data-swiftype-index="false"
      >
        {createLinks.map((link) => {
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
  /** If `false`, do not show "All docs" as first breadcrumb link */
  domain: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }),
    PropTypes.bool
  ]),
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
  domain: {
    title: 'All docs',
    path: 'https://docs.mapbox.com'
  },
  themeWrapper: ''
};
