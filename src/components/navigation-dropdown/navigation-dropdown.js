import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import { useSelect } from 'downshift';
import classnames from 'classnames';

// called when an item is selected
function handleChange(selectedItem, onChange) {
  // track selection in analytics
  if (window && window.analytics) {
    analytics.track('Selected item from NavigationDropdown', selectedItem);
  }
  // handle onChange function
  onChange(selectedItem);
}

// determines if there is an active item
function findActiveItem(currentPath, dropdownOptions) {
  return currentPath
    ? dropdownOptions.filter((f) => f.path === currentPath)[0]
    : undefined;
}

// determine theme button classes
// use `themeButton` string or try themeButtonOption[option]
// default to themeButtonOption.default
function themeClasses(themeButton, themeButtonOption) {
  const themeButtonOptions = {
    default:
      'border border--gray-light py6 px12 bg-white round-full w-full color-gray-on-hover',
    menuItem: 'relative inline-block px6 mr24 w-full py12'
  };
  return themeButton
    ? themeButton
    : themeButtonOptions[themeButtonOption] || themeButtonOptions.default;
}

function NavigationDropdown(props) {
  const {
    dropdownOptions,
    currentPath,
    onChange,
    themeButton,
    themeButtonOption,
    label,
    id
  } = props;

  // create useSelect instance
  // https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items: dropdownOptions,
    id: id,
    initialSelectedItem: findActiveItem(currentPath, dropdownOptions),
    itemToString: (item) => (item ? item.path : ''),
    onSelectedItemChange: ({ selectedItem }) =>
      handleChange(selectedItem, onChange)
  });

  const buttonId = getToggleButtonProps({}).id;
  const menuId = getMenuProps({}).id;

  // Render toggle button
  const renderButton = (
    <button
      {...getToggleButtonProps(
        {
          'aria-label': 'Toggle menu', // manually set aria-label to better describe button's function
          'aria-labelledby': undefined, // reset value since we are setting aria-label
          'aria-haspopup': 'true', // override haspopup as true
          role: 'button', // override role as button
          'aria-controls': menuId // this button controls the menu in renderMenu
        },
        { suppressRefError: true }
      )}
      className={`flex-parent flex-parent--center-main flex-parent--space-between-main txt-truncate relative ${themeClasses(
        themeButton,
        themeButtonOption
      )}`}
    >
      {selectedItem ? selectedItem.title : label}
      <Icon name="chevron-down" inline={true} />
    </button>
  );

  // Render individual menu item
  const renderItem = (item, index) => {
    // don't show "latest" flag if the previous item is also latest
    const prevItem = dropdownOptions[index - 1];
    const prevItemIsLatest = prevItem && prevItem.latest;
    return (
      <li
        {...getItemProps({
          item,
          index,
          disabled: !item.path, // if no path, disable the item
          role: 'menuitem', // set role as menuitem
          'aria-label': item.ariaLabel || undefined
        })}
        className={classnames('block w-full px12', {
          'bg-gray-faint': highlightedIndex === index, // change color on highlight, match hover
          'link bg-gray-faint-on-hover py3': item.path, // all items with a path are links
          'link--gray': !item.latest && item.path, // all non-latest links are gray
          'link--blue': item.latest && item.path, // latest items with path are blue links
          'txt-bold': item.latest, // every latest item is bold
          mt18: !item.path && index !== 0 // add margin-top to non-link elements
        })}
        key={index}
      >
        {item.title}
        {item.latest && !prevItemIsLatest ? <span> &mdash; latest</span> : ''}
      </li>
    );
  };

  // Render menu and menu items
  const renderMenu = (
    <ul
      {...getMenuProps(
        {
          'aria-labelledby': buttonId, // the button labels the menu
          role: 'menu' // set role as menu
        },
        { suppressRefError: true }
      )}
      className={classnames('', {
        'absolute bg-white round shadow-darken25 wmin180 w-full hmax240 scroll-auto py6 mt3 scroll-styled z4 ml0': isOpen,
        none: !isOpen // hide menu when it isn't open
      })}
    >
      {dropdownOptions.map((item, index) => renderItem(item, index))}
    </ul>
  );

  return (
    <div className="dr-ui--navigation-dropdown relative">
      {renderButton}
      {renderMenu}
    </div>
  );
}

NavigationDropdown.defaultProps = {
  id: 'navigation-dropdown',
  onChange: (selection) => {
    if (selection && selection.path && window) window.location = selection.path;
  },
  themeButtonOption: 'default'
};

NavigationDropdown.propTypes = {
  /** unique id for the component */
  id: PropTypes.string,
  /** if no `currentPath`, `label` is the default label of the dropdown */
  label: PropTypes.string,
  /** the page's current relative path */
  currentPath: PropTypes.string,
  /** Array of dropdown items:
- `title` - The title of the link. This value accepts nodes, which is helpful for appending other content such a [Tag](#tag).
- `path` - The URL for the link. If empty, the item will be treated as a heading, which is helpful for nested API Reference dropdowns.
- `latest` - If `true`, the "latest" label will be added to the link text.
- `ariaLabel` - Applies the value as an `aria-label` to the link. This is helpful for nested API reference to provide proper context for each link.
  */
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      path: PropTypes.string,
      latest: PropTypes.bool,
      ariaLabel: PropTypes.string
    })
  ).isRequired,
  /** function to call when an item is selected */
  onChange: PropTypes.func,
  /** theme options for the dropdown button */
  themeButtonOption: PropTypes.oneOf(['menuItem', 'default']),
  /** class names for the dropdown button */
  themeButton: PropTypes.string
};

export default NavigationDropdown;
