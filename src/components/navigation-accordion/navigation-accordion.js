import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ProductMenu from '../../components/product-menu';
import Icon from '@mapbox/mr-ui/icon';

export default class NavigationAccordion extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderHeader(href, label, hasChildren) {
    const { parentPage } = this.props;
    const isActive = parentPage === href;
    const headerClasses = classnames(
      'txt-spacing1 px18 py6 inline-block txt-m color-gray-dark txt-uppercase txt-bold w-full',
      {
        'align-left round-l-full bg-blue-faint color-blue': isActive,
        'color-darken50': !isActive
      }
    );
    const chevronStyle = {
      'margin-left': '3px'
    };

    return (
      <a href={href} className={headerClasses}>
        {label}
        {hasChildren && (
          <span style={chevronStyle}>
            <Icon
              name={isActive ? 'chevron-down' : 'chevron-right'}
              inline={true}
            />
          </span>
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
      .map((page) => {
        const isActive = activeItem === page.path;
        const subItemClasses = classnames('py6 pl30 align-left round-full', {
          'color-gray-dark txt-bold': isActive,
          'color-gray': !isActive
        });
        return (
          <li className={subItemClasses} key={page.title}>
            <a className="inline-block w-full" href={page.path}>
              {page.title}
            </a>
          </li>
        );
      });

    return <ul>{subItemEls}</ul>;
  }

  renderItems() {
    const { navigation, parentPage } = this.props;
    const activeItem = this.props.location.pathname;
    const firstLevelItems = navigation.navTabs;

    const items = firstLevelItems.map((pageSection) => {
      const { label, id, href } = pageSection;
      const secondLevelItems = navigation.accordion[pageSection.href];
      return {
        id: id,
        header: this.renderHeader(
          href,
          label,
          secondLevelItems && secondLevelItems.length > 0
        ),
        body:
          pageSection.id === parentPage
            ? this.renderBody(secondLevelItems, activeItem)
            : []
      };
    });

    return items;
  }

  renderSidebar(items) {
    const sidebarItems = items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div className="pt6">
            {item.header}
            {item.body}
          </div>
        </React.Fragment>
      );
    });

    return sidebarItems;
  }

  render() {
    const { constants, navigation } = this.props;
    const { SITE, BASEURL } = constants;
    const { title, tag, path } = navigation;

    const items = this.renderItems();

    return (
      <div className="py12 none block-mm">
        <div className="ml18 my18">
          <ProductMenu
            productName={title || SITE}
            tag={tag || undefined}
            homePage={`${BASEURL}/${path || ''}`}
          />
        </div>
        {this.renderSidebar(items)}
      </div>
    );
  }
}

NavigationAccordion.propTypes = {
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  parentPage: PropTypes.string.isRequired,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired
  }).isRequired
};
