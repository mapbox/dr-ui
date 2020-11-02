import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@mapbox/mr-ui/icon';

export default class NavigationAccordion extends React.PureComponent {
  renderHeader(href, label, hasChildren) {
    const { parentPage } = this.props;
    const isActive = parentPage === href;
    return (
      <a
        href={href}
        className={classnames(
          'px12 py3 inline-block txt-uppercase txt-bold round-full w-full color-blue-on-hover',
          {
            'bg-blue-faint color-blue': isActive,
            'color-darken75': !isActive,
            'flex-parent flex-parent--space-between-main': hasChildren
          }
        )}
        style={{ letterSpacing: '0.05em' }}
      >
        {label}
        {hasChildren && (
          <Icon name={isActive ? 'chevron-up' : 'chevron-down'} inline={true} />
        )}
      </a>
    );
  }
  renderBody(subItems, activeItem) {
    const { parentPage } = this.props;
    const subItemEls = subItems
      .filter((page) => {
        return page.path !== parentPage;
      })
      .map((page) => (
        <li
          className={classnames('pb3 pl12 link link--gray', {
            'txt-bold': activeItem === page.path
          })}
          key={page.title}
        >
          <a className="inline-block w-full" href={page.path}>
            {page.title}
          </a>
        </li>
      ));

    return <ul className="mb6">{subItemEls}</ul>;
  }

  render() {
    const { navigation, parentPage, location } = this.props;
    const activeItem = location.pathname;
    const items = navigation.map((pageSection) => {
      const { title, path, pages } = pageSection;
      return {
        header: this.renderHeader(path, title, pages && pages.length > 1),
        body:
          path === parentPage && pages.length > 1
            ? this.renderBody(pages, activeItem)
            : []
      };
    });

    const sidebarItems = items.map((item, index) => {
      return (
        <li key={index}>
          {item.header}
          {item.body}
        </li>
      );
    });

    return (
      <nav className="ml-neg12">
        <ul>{sidebarItems}</ul>
      </nav>
    );
  }
}

NavigationAccordion.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      pages: PropTypes.array
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
  parentPage: PropTypes.string.isRequired
};
