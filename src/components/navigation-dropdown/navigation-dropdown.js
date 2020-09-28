import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import classnames from 'classnames';

class NavigationDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownClosed: true
    };
    this.dropdownContainer = React.createRef();
  }

  triggerHideMenu = (event) => {
    // hide the menu if the current element is not inside the dropdownContainer
    if (!this.dropdownContainer.current.contains(event.target)) {
      this.hideMenu();
    }
  };

  componentDidMount() {
    // hide menu when click is outside the navigation
    document.addEventListener(
      'click',
      (event) => this.triggerHideMenu(event),
      true
    );
    // hide menu when focus is outside the navigation
    document.addEventListener(
      'focusin',
      (event) => this.triggerHideMenu(event),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'click',
      (event) => this.triggerHideMenu(event),
      true
    );
    document.removeEventListener(
      'focusin',
      (event) => this.triggerHideMenu(event),
      true
    );
  }

  hideMenu = () => {
    this.setState({ dropdownClosed: true });
  };

  toggleMenu = () => {
    this.setState({ dropdownClosed: !this.state.dropdownClosed });
  };

  findCurrentOption = () => {
    const { dropdownOptions, currentPath } = this.props;
    return dropdownOptions.filter((option) => currentPath === option.path)[0];
  };
  render() {
    const { id, dropdownOptions, label } = this.props;
    const { dropdownClosed } = this.state;
    const currentOption = this.findCurrentOption();
    return (
      <div
        className="dr-ui--navigation-dropdown relative"
        ref={this.dropdownContainer}
      >
        <button
          onClick={this.toggleMenu}
          aria-label="Toggle menu"
          aria-controls={id}
          aria-haspopup="true"
          aria-expanded={!dropdownClosed}
          className="flex-parent flex-parent--center-main flex-parent--space-between-main txt-truncate border border--gray-light py6 px12 bg-white round-full w-full color-gray-on-hover"
        >
          <div className="txt-truncate">
            {currentOption ? currentOption.title : label}
          </div>
          <div className="flex-child--no-shrink w18">
            <Icon name="chevron-down" inline={true} />
          </div>
        </button>
        <nav
          id={id}
          className={classnames('', {
            none: dropdownClosed,
            'absolute round bg-white shadow-darken10 w-full mt6 z5 py6 hmax240 scroll-auto scroll-styled': !dropdownClosed
          })}
          aria-hidden={dropdownClosed}
        >
          <ul>
            {dropdownOptions.map((opt) => (
              <li key={opt.title} className="mb3">
                <a className="link link--gray block py6 px12" href={opt.path}>
                  {opt.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

NavigationDropdown.defaultProps = {
  id: 'dr-ui--navigation-dropdown',
  label: 'Menu'
};

NavigationDropdown.propTypes = {
  /** unique id for the component */
  id: PropTypes.string,
  /** the page's current relative path */
  currentPath: PropTypes.string,
  /** if no `currentPath`, `label` is the default label of the dropdown */
  label: PropTypes.string,
  /** array of dropdown options */
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavigationDropdown;
