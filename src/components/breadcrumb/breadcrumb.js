import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import { createUniqueCrumbs } from './utils';

export default class Breadcrumb extends React.Component {
  render() {
    const {
      currentPage,
      section,
      domain,
      site,
      subsite,
      themeWrapper
    } = this.props;

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
      ...(site ? [site] : []),
      ...(subsite ? [subsite] : []),
      ...(section ? [section] : []),
      ...(currentPage ? [currentPage] : [])
    ]);

    return createLinks.length > 1 ? (
      <div
        className={`dr-ui--breadcrumb ${themeWrapper}`}
        data-swiftype-index="false"
      >
        {createLinks.map((link) => {
          return link.path !== currentPage.path ? (
            <Link key={link.title} href={link.path}>
              {link.title}
            </Link>
          ) : (
            <span className="color-gray">{link.title}</span>
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
  /** Title of the site and homepage path */
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  /** Subsite title and homepage path (if using multi-structured layout) */
  subsite: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  /** Section of the site (example: Guides, Tutorials, Examples) and path */
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  /** Current page title and path */
  currentPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
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
