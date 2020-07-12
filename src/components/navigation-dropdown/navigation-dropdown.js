import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import classnames from 'classnames';

class NavigationDropdown extends React.Component {
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
                  className="absolute bg-white round shadow-darken25 hmax240 scroll-auto py6 mt3 scroll-styled z4"
                >
                  {options.map((item, index) => (
                    <li
                      className={classnames(
                        'block w-full px12 py6 link bg-gray-faint-on-hover',
                        {
                          'bg-gray-faint': highlightedIndex === index,
                          'link--gray': !item.latest,
                          'txt-bold link--blue': item.latest
                        }
                      )}
                      key={item.value}
                      {...getItemProps({ item, index })}
                    >
                      {item.label}
                      {item.latest ? <span> &mdash; latest stable</span> : ''}
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
      value: PropTypes.string.isRequired,
      latest: PropTypes.bool
    })
  ).isRequired,
  onChange: PropTypes.func,
  themeButton: PropTypes.string
};

export default NavigationDropdown;
