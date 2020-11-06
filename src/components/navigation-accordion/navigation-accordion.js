import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@mapbox/mr-ui/icon';
// check if client body width is >= 640
const isMM =
  typeof document !== 'undefined' ? document.body.clientWidth >= 640 : false;

export default class NavigationAccordion extends React.Component {
  constructor() {
    super();
    this.state = {
      activeToggles: []
    };
  }

  // add item or remove it if it already exists
  setToggle = (label) => {
    const { activeToggles } = this.state;
    const labelIndex = activeToggles.indexOf(label);
    if (labelIndex > -1) {
      // label already exists, remove it from activeToggles
      activeToggles.splice(labelIndex, 1);
    } else {
      // label does not exist, add it to activeToggles
      activeToggles.push(label);
    }
    this.setState({ activeToggles: activeToggles });
  };

  componentDidMount() {
    // if device width is >= 640
    // determine which section is active and activate its toggle
    const { parentPage, navigation } = this.props;
    if (isMM) {
      navigation.forEach((nav) => {
        if (nav.path === parentPage) {
          this.setToggle(nav.title);
        }
      });
    }
  }

  renderHeader(
    href,
    label,
    hasChildren,
    isActiveToggle,
    isActiveSection,
    sectionId
  ) {
    return (
      <div
        className={classnames(
          'px12 flex-parent txt-uppercase txt-fancy round-full w-full color-darken75',
          {
            'bg-blue-faint color-blue': isActiveSection,
            'flex-parent flex-parent--space-between-main': hasChildren
          }
        )}
      >
        <a
          href={href}
          className="flex-child flex-child--grow  color-blue-on-hover py6 py3-mm"
          style={{ letterSpacing: '0.025em' }}
        >
          {label}
        </a>
        {hasChildren && (
          <button
            className="flex-child flex-child--no-shrink color-blue-on-hover px12 px0-mm"
            onClick={() => this.setToggle(label)}
            aria-label={`Toggle ${label} menu`}
            aria-controls={sectionId}
            aria-expanded={isActiveToggle}
          >
            <Icon
              name={isActiveToggle ? 'chevron-up' : 'chevron-down'}
              inline={true}
            />
          </button>
        )}
      </div>
    );
  }
  renderBody(subItems, activeItem, sectionId) {
    const { parentPage } = this.props;
    const subItemEls = subItems
      .filter((page) => {
        return page.path !== parentPage;
      })
      .map((page) => (
        <li className="mb3" key={page.title}>
          <a
            className={classnames('inline-block w-full color-blue-on-hover', {
              'color-blue': activeItem === page.path
            })}
            href={page.path}
          >
            {page.title}
          </a>
        </li>
      ));

    return (
      <ul id={sectionId} className="mb12 ml12">
        {subItemEls}
      </ul>
    );
  }

  render() {
    const { navigation, parentPage, location } = this.props;
    const { activeToggles } = this.state;
    const activeItem = location.pathname;
    const items = navigation.map((pageSection) => {
      const { title, id, path, pages, hideSubpages } = pageSection;
      // the section has sub pages
      const hasPages = pages && pages.length > 1 && !hideSubpages;
      // the section's toggle is active
      const isActiveToggle = activeToggles.indexOf(title) > -1;
      // the section is active
      const isActiveSection = path === parentPage;
      const sectionId = `menu-${id}`;
      return {
        header: this.renderHeader(
          path,
          title,
          hasPages,
          isActiveToggle,
          isActiveSection,
          sectionId
        ),
        body:
          isActiveToggle && hasPages
            ? this.renderBody(pages, activeItem, sectionId)
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
      <nav className="mx-neg12">
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
      id: PropTypes.string.isRequired,
      hideSubpages: PropTypes.bool, // needed for /help/tutorials and /help/troublehshooting
      pages: PropTypes.array
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
  parentPage: PropTypes.string.isRequired
};
