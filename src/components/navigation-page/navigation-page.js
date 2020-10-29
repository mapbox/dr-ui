import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NavigationPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      activeParent: null
    };
  }

  componentDidMount() {
    const { location, parentPage } = this.props;

    this.setState({
      activeItem: location.pathname,
      activeParent: parentPage
    });
  }

  renderHeader(href, label) {
    const { activeParent } = this.state;
    const isActive = activeParent === href;
    const headerClasses = classnames(
      "pl6 inline-block txt-m color-gray-dark txt-uppercase txt-bold",
      {
        "color-dark": isActive,
        "color-darken50": !isActive
      }
    );
    
    return (
      <a
        href={href}
        className={headerClasses}
      >
        {label}
      </a>
    );
  }
  renderBody(subItems, activeItem) {
    if (!subItems || subItems.length < 1) return;

    const subItemEls = subItems.map((page) => {
      const isActive = activeItem === page.path;
      const subItemClasses = classnames(
        'color-gray py6 px18 align-left mt12 round-full',
        {
          'bg-blue-faint color-blue': isActive
        }
      );
      return (
        <li className={subItemClasses} key={page.title}>
          <a className="inline-block w-full" href={page.path}>{page.title}</a>
        </li>
      );
    });

    return (
      <ul>
        {subItemEls}
      </ul>
    );
  }

  renderItems() {
    const { navigation } = this.props;
    const { activeItem, activeParent } = this.state;
    const firstLevelItems = navigation.navTabs;

    const items = firstLevelItems.map((parentPage) => {
      const { label, id, href } = parentPage;
      const secondLevelItems = navigation.accordion[activeParent];
      return {
        id: id,
        header: this.renderHeader(href, label),
        body: parentPage.id === activeParent ? this.renderBody(secondLevelItems, activeItem) : []
      };
    });

    return items;
  }

  renderSidebar(items) {
    const parentItems = items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div className='sidebar-item pt24'>
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

NavigationPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  parentPage: PropTypes.string.isRequired
};
