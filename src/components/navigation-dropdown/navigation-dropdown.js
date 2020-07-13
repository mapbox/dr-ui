import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import { useSelect } from 'downshift';
import classnames from 'classnames';

const themeButtonOptions = {
  default:
    'border border--gray-light py6 px12 bg-white round-full w-full color-gray-on-hover',
  menuItem: 'relative inline-block px6 mr24 w-full py12'
};

function NavigationDropdown(props) {
  const {
    options,
    currentPath,
    onChange,
    themeButton,
    themeButtonOption,
    label,
    id
  } = props;

  // determine theme button classes
  // use `themeButton` string or try themeButtonOption[option]
  // default to themeButtonOption.default
  const themeButtonClasses = themeButton
    ? themeButton
    : themeButtonOptions[themeButtonOption] || themeButtonOptions.default;

  // called when an item is selected
  function handleChange(selectedItem) {
    // track selection in analytics
    if (window && window.analytics) {
      analytics.track('Selected item from NavigationDropdown', selectedItem);
    }
    // handle onChange function
    onChange(selectedItem);
  }

  // determines if there is an active item
  const currentItem = currentPath
    ? options.filter((f) => f.value === currentPath)[0]
    : undefined;

  // create useSelect instances
  // https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items: options,
    id,
    initialSelectedItem: currentItem,
    itemToString: (item) => (item ? item.value : ''),
    onSelectedItemChange: ({ selectedItem }) => handleChange(selectedItem)
  });

  // renders individual menu item
  const renderItem = (item, index) => {
    // don't show "latest" flag if the previous item is also latest
    const prevItem = options[index - 1];
    const prevItemIsLatest = prevItem && prevItem.latest;
    return (
      <li
        className={classnames('block w-full px12', {
          'bg-gray-faint': highlightedIndex === index, // change color on highlight, match hover
          'link bg-gray-faint-on-hover py3': item.value, // all items with a value are links
          'link--gray': !item.latest && item.value, // all non latest links are gray
          'txt-bold': item.latest, // every latest item is bold
          'link--blue': item.latest && item.value, // latest items with value are blue links
          mt18: !item.value && index !== 0 // add margin-top to non link elements
        })}
        key={`${item.label}-${item.value}`}
        {...getItemProps({ item, index, disabled: item.value ? false : true })}
        role="menuitem"
      >
        {item.label}
        {item.latest && !prevItemIsLatest ? <span> &mdash; latest</span> : ''}
      </li>
    );
  };

  return (
    <div className="dr-ui--navigation-dropdown relative">
      <button
        {...getToggleButtonProps({}, { suppressRefError: true })}
        role="button" // override role as button
        aria-haspopup="true" // override haspopup as true
        className={`flex-parent flex-parent--center-main flex-parent--space-between-main txt-truncate relative ${themeButtonClasses}`}
        aria-label="Navigation" // manually set aria-label
        aria-labelledby="" // reset value
      >
        {selectedItem ? selectedItem.label : label}
        <Icon name="chevron-down" inline={true} />
      </button>
      <ul
        {...getMenuProps({}, { suppressRefError: true })}
        aria-labelledby={
          getToggleButtonProps({}, { suppressRefError: true }).id
        } // labeled by button
        className={classnames('', {
          'absolute bg-white round shadow-darken25 wmin180 w-full hmax240 scroll-auto py6 mt3 scroll-styled z4 ml0': isOpen
        })}
        role={isOpen ? 'menu' : 'none'} // set role as menu when open
      >
        {isOpen && options.map((item, index) => renderItem(item, index))}
      </ul>
    </div>
  );
}

NavigationDropdown.defaultProps = {
  id: 'navigation-dropdown',
  onChange: (selection) => {
    if (selection && selection.value && window)
      window.location = selection.value;
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
  /** */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string,
      latest: PropTypes.bool
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
