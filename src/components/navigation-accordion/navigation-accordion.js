import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@mapbox/mr-ui/icon';
import NavigationDropdown from '../navigation-dropdown/navigation-dropdown';
import debounce from 'lodash.debounce';

const debounceVal = 50;

class NavigationAccordion extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeh2: '',
      activeh3: ''
    };
    this.onScrollLive = this.onScrollLive.bind(this);
  }

  componentDidMount() {
    this.onScrollHeadingTwo = debounce(this.onScrollLive, debounceVal);
    document.addEventListener('scroll', () => {
      this.onScrollHeadingTwo('h2', 'activeh2');
    });
    this.onScrollLive('h2', 'activeh2');

    this.onScrollHeadingThree = debounce(this.onScrollLive, debounceVal);
    document.addEventListener('scroll', () => {
      this.onScrollHeadingThree('h3', 'activeh3');
    });
    this.onScrollLive('h3', 'activeh3');
  }

  onScrollLive(level, key) {
    const sections = document.querySelectorAll(`div.section-${level}`);
    if (!sections.length) return;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.bottom > 0) {
        this.setState({
          [key]: sections[i].getElementsByTagName(level)[0]
            ? sections[i].getElementsByTagName(level)[0].id
            : ''
        });
        return;
      }
    }
  }

  render() {
    const { props, state } = this;
    function itemClasses(isActive) {
      return classnames('color-blue-on-hover', {
        'txt-bold': isActive
      });
    }

    const secondLevelContent =
      props.contents.secondLevelItems &&
      props.contents.secondLevelItems.map(item => {
        const isActive = state.activeh2 === item.path;
        let openSubItems = isActive;
        const subItems =
          item.thirdLevelItems &&
          item.thirdLevelItems.map(subItem => {
            const isActive = state.activeh3 === subItem.path;
            if (isActive) openSubItems = true;
            return (
              <li key={subItem.path} className="mt6">
                <a href={`#${subItem.path}`} className={itemClasses(isActive)}>
                  {subItem.title}
                </a>
              </li>
            );
          });
        return (
          <li key={item.path} className="mb6">
            <a href={`#${item.path}`} className={itemClasses(isActive)}>
              {item.title}
            </a>
            <ul className={openSubItems ? 'pl12 color-darken75' : 'none'}>
              {subItems}
            </ul>
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
        if (isActive && secondLevelContent && secondLevelContent.length > 0) {
          renderedSecondLevelContent = (
            <div className="ml24 pt0">
              <ul className="txt-m pb12 inline-block-mm none unprose">
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
        <div className="none-mm block bg-gray-faint px24 py24">
          <NavigationDropdown
            currentPath={props.currentPath}
            dropdownOptions={props.contents.firstLevelItems}
            onChange={props.onDropdownChange}
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
        path: PropTypes.string.isRequired,
        thirdLevelItems: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
          })
        )
      })
    )
  }),
  onDropdownChange: PropTypes.func
};

export default NavigationAccordion;
