import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import classnames from 'classnames';

class NavigationDropdown extends React.Component {
  renderItem = (item, highlightedIndex, getItemProps, index) => {
    // don't show "latest" flag if the previous item is also latest
    const prevItem = this.props.options[index - 1];
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
      >
        {item.label}
        {item.latest && !prevItemIsLatest ? <span> &mdash; latest</span> : ''}
      </li>
    );
  };

  render() {
    const {
      options,
      currentPath,
      id,
      onChange,
      themeButton,
      label
    } = this.props;
    const selectedItem = currentPath
      ? options.filter((f) => f.value === currentPath)[0]
      : undefined;

    return (
      <div className="dr-ui--navigation-dropdown">
        <Downshift
          id={id}
          initialSelectedItem={selectedItem}
          itemToString={(item) => (item ? item.value : '')}
          onChange={(selection) => onChange(selection)}
        >
          {({
            isOpen,
            selectedItem,
            getToggleButtonProps,
            getLabelProps,
            getMenuProps,
            getItemProps,
            highlightedIndex
          }) => (
            <div>
              <label className="hide-visually" {...getLabelProps()}>
                Navigation
              </label>
              <button className={themeButton} {...getToggleButtonProps()}>
                {selectedItem ? selectedItem.label : label}
                <div className="select-arrow" aria-hidden="true" />
              </button>
              {isOpen && (
                <ul
                  {...getMenuProps()}
                  className="absolute bg-white round shadow-darken25 wmin180 hmax240 scroll-auto py6 mt3 scroll-styled z4"
                >
                  {options.map((item, index) => {
                    return this.renderItem(
                      item,
                      highlightedIndex,
                      getItemProps,
                      index
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}

NavigationDropdown.defaultProps = {
  id: 'navigate-this-section',
  onChange: (selection) => {
    if (window && window.analytics) {
      analytics.track('Selected item from NavigationDropdown', selection);
    }
    if (selection.value && window) window.location = selection.value;
  },
  themeButton: 'select select--stroke bg-white round-full txt-truncate relative'
};

NavigationDropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  currentPath: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string,
      latest: PropTypes.bool
    })
  ).isRequired,
  onChange: PropTypes.func,
  themeButton: PropTypes.string
};

export default NavigationDropdown;
