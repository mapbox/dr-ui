import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import classnames from 'classnames';

export default class NavigationDropdown extends React.Component {
  render() {
    const { options, currentPath, id, onChange } = this.props;
    const selectedItem = options.filter((f) => f.value === currentPath)[0];
    return (
      <div className="dr-ui--navigation-dropdown relative">
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
              <button
                className="select select--stroke bg-white round-full txt-truncate"
                {...getToggleButtonProps()}
              >
                {selectedItem ? selectedItem.label : 'Navigation'}
                <div className="select-arrow" aria-hidden="true" />
              </button>
              {isOpen && (
                <ul
                  {...getMenuProps()}
                  className="absolute bg-white round py6 mt3 border border--gray-light shadow-darken10 z4 hmax300 w-full scroll-auto scroll-styled "
                >
                  {options.map((item, index) => (
                    <li
                      className={classnames(
                        'block w-full px12 py6 link link--gray bg-gray-faint-on-hover',
                        {
                          'bg-gray-faint': highlightedIndex === index
                        }
                      )}
                      key={item.value}
                      {...getItemProps({ item, index })}
                    >
                      {item.label}
                    </li>
                  ))}
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
    if (selection.value && window) window.location = selection.value;
  }
};

NavigationDropdown.propTypes = {
  id: PropTypes.string,
  currentPath: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func
};
