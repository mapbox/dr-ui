import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

// cleans breadcrumbs
// does not add a link if the path or title already exists
function uniquePaths(links) {
  return links.reduce((arr, item) => {
    const pathExists = arr.filter((f) => f.path === item.path).length > 0;
    const titleExists = arr.filter((f) => f.title === item.title).length > 0;
    if (!pathExists && !titleExists) arr.push(item);
    return arr;
  }, []);
}

export default class Breadcrumb extends React.Component {
  render() {
    const { currentPage, section, domain, site, subsite } = this.props;

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

    const createLinks = uniquePaths([
      ...(domain !== false ? [domain] : []),
      ...(site ? [site] : []),
      ...(subsite ? [subsite] : []),
      ...(section ? [section] : []),
      ...(currentPage ? [currentPage] : [])
    ]);

    return createLinks.length > 1 ? (
      <div
        className="dr-ui--breadcrumb none block-mm px24 pt12"
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
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  subsite: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  currentPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};

Breadcrumb.defaultProps = {
  domain: {
    title: 'All docs',
    path: 'https://docs.mapbox.com'
  }
};
