import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { describePageStructure } from './helpers';
import { findParentPath } from '../../../utils';

export default class SidebarPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      navStructure: null
    };
  }

  componentDidMount() {
    const { navigation, location } = this.props;
    const isInNavTabs = navigation.navTabs.some((tab) =>
      Object.prototype.hasOwnProperty.call(tab, location.pathname)
    );
    const thisSidebarParent = isInNavTabs
      ? location.pathname
      : findParentPath(navigation, location.pathname);

    const navStructure = describePageStructure(
      this.props.navigation,
      thisSidebarParent
    );
    this.setState({
      navStructure,
      activeItem: location.pathname
    });
  }

  renderHeader(index, href, label) {
    return (
      <a
        href={href}
        className="navItems inline-block txt-l txt-bold color-darken50 txt-uppercase"
      >
        {label}
      </a>
    );
  }
  renderBodySubItems(site, activeItem) {
    if (!site.pages) return;
    // if page.id matches active item
    // Apply special classnames
    const subItems = site.pages.map((page, index) => {
      const isActive = activeItem === page.path;
      const subItemClasses = classnames(
        'color-gray-dark txt-bold py6 pl18 mt12 ml3 round-full',
        {
          'bg-blue-faint color-blue': isActive
        }
      );
      return (
        <li className={subItemClasses} key={index}>
          <a href={page.path}>{page.title}</a>
        </li>
      );
    });

    return subItems;
  }
  renderBody(index, pages, activeItem) {
    return <ul key={index}>{this.renderBodySubItems(pages, activeItem)}</ul>;
  }

  renderItems() {
    if (!this.state.navStructure) return [];
    const { navStructure, activeItem } = this.state;

    const items = navStructure.map((parentPage, index) => {
      const { label, id, href } = parentPage;
      const headerEls = this.renderHeader(index, href, label);
      const bodyEls = this.renderBody(index, parentPage, activeItem);
      return {
        id: id,
        header: headerEls,
        body: bodyEls
      };
    });

    return items;
  }

  renderSidebar(items) {
    const parentItems = items.map((item, index) => {
      const containerClasses = classnames('sidebar-item pl12 py24', {
        'border-t border--gray-light ': index !== 0
      });
      return (
        <React.Fragment>
          <div key={index} className={containerClasses}>
            {item.header}
            {item.body}
          </div>
        </React.Fragment>
      );
    });

    return parentItems;
  }

  render() {
    const items = this.renderItems();
    return (
      <div className="mx24 py12 none block-mm">{this.renderSidebar(items)}</div>
    );
  }
}

SidebarPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
