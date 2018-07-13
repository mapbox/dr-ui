import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@mapbox/react-icon';
import NavigationDropdown from '../navigation-dropdown/navigation-dropdown';

class NavigationAccordion extends React.PureComponent {
  render() {
    const { props } = this;
    const secondLevelContent =
      props.contents.secondLevelItems &&
      props.contents.secondLevelItems.map(item => {
        return (
          <li key={item.path} className="mb6">
            <a
              href={`#${item.path}`}
              className="color-blue-on-hover text-decoration-none unprose"
            >
              {item.title}
            </a>
          </li>
        );
      });
    const firstLevelContent = props.contents.firstLevelItems.map(
      (page, index) => {
        const title = page.title;
        let icon = null;
        const isActive = this.props.currentPath === page.path;
        const breakLineClasses = classnames('py3 ', {
          'border-t border--gray-light': index !== 0
        });
        const textClasses = classnames('pl12 py12 txt-bold txt-m flex-child', {
          'color-black': isActive
        });
        const activeSectionClasses = classnames(
          'pl24-mm px0 block-mm none pr12',
          {
            'bg-lighten75': isActive
          }
        );
        if (!isActive) {
          icon = (
            <div className="flex-child flex-child--no-shrink">
              <Icon name="chevron-down" className="icon color-gray h24 w24" />
            </div>
          );
        }
        let renderedSecondLevelContent = '';
        if (isActive && secondLevelContent) {
          renderedSecondLevelContent = (
            <div className="ml24 pt0">
              <ul className="txt-m pb12 inline-block-mm none color-blue-on-hover unprose">
                {secondLevelContent}
              </ul>
            </div>
          );
        }

        return (
          <div key={index} className={activeSectionClasses}>
            <div className={breakLineClasses}>
              <a
                href={page.path}
                className="color-blue-on-hover color-gray text-decoration-none unprose flex-parent flex-parent--space-between-main flex-parent--center-cross"
              >
                <div className={textClasses}>{title}</div>
                {icon}
              </a>
              {renderedSecondLevelContent}
            </div>
          </div>
        );
      }
    );
    return (
      <div>
        <div className="block-mm none">{firstLevelContent}</div>
        <div className="none-mm block bg-gray-faint">
          <NavigationDropdown
            currentPath={props.currentPath}
            dropdownOptions={props.contents.firstLevelItems}
          />
        </div>
      </div>
    );
  }
}

NavigationAccordion.propTypes = {
  currentPath: PropTypes.string,
  contents: PropTypes.shape({
    firstLevelItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      })
    ).isRequired,
    secondLevelItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      })
    )
  })
};

export default NavigationAccordion;
