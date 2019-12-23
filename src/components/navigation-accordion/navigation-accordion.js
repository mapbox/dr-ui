import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@mapbox/mr-ui/icon';
import NavigationDropdown from '../navigation-dropdown/navigation-dropdown';
import debounce from 'debounce';
import Tag from '../tag/tag';

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
    this.onScroll = debounce(this.onScrollLive, debounceVal);
    document.addEventListener('scroll', this.onScroll);
    this.onScrollLive();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScrollLive() {
    const sections = document.querySelectorAll(`div.section-h2`);
    if (!sections.length) return;
    for (let i = 0; i < sections.length; i++) {
      // find the active section
      if (sections[i].getBoundingClientRect().bottom > 0) {
        this.setState({
          activeh2: sections[i].getElementsByTagName('h2')[0]
            ? sections[i].getElementsByTagName('h2')[0].id
            : ''
        });
        // find the active subheading within the section
        const subheadings = sections[i].querySelectorAll(`div.section-h3`);
        for (let s = 0; s < subheadings.length; s++) {
          if (subheadings[s].getBoundingClientRect().bottom > 0) {
            this.setState({
              activeh3: subheadings[s].getElementsByTagName('h3')[0]
                ? subheadings[s].getElementsByTagName('h3')[0].id
                : ''
            });
            return;
          }
        }
        return;
      }
    }
  }

  buildTag = item => {
    const tagProps = {
      theme: item.tag,
      customLabel: item.customTagProps
        ? item.customTagProps.customLabel
        : undefined,
      customTooltipText: item.customTagProps
        ? item.customTagProps.customTooltipText
        : undefined,
      customStyles: item.customTagProps
        ? item.customTagProps.customStyles
        : undefined
    };
    return (
      <span className="ml6">
        <Tag {...tagProps} />
      </span>
    );
  };

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
                  {subItem.tag ? this.buildTag(subItem) : ''}
                </a>
              </li>
            );
          });
        return (
          <li key={item.path} className="mb6">
            <a href={`#${item.path}`} className={itemClasses(isActive)}>
              {item.title}
              {item.tag ? this.buildTag(item) : ''}
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
                <div className={textClasses}>
                  {title}
                  {page.tag ? this.buildTag(page) : ''}
                </div>
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
        tag: PropTypes.oneOf([
          'legacy',
          'beta',
          'fundamentals',
          'new',
          'custom'
        ]),
        /* Required if tag is set to `custom` */
        customTagProps: PropTypes.shape({
          customLabel: PropTypes.string.isRequired,
          customTooltipText: PropTypes.string.isRequired,
          customStyles: PropTypes.shape({
            background: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            borderColor: PropTypes.string.isRequired
          }).isRequired
        }),
        path: PropTypes.string.isRequired
      })
    ).isRequired,
    secondLevelItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        tag: PropTypes.oneOf([
          'legacy',
          'beta',
          'fundamentals',
          'new',
          'custom'
        ]),
        /* Required if tag is set to `custom` */
        customTagProps: PropTypes.shape({
          customLabel: PropTypes.string.isRequired,
          customTooltipText: PropTypes.string.isRequired,
          customStyles: PropTypes.shape({
            background: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            borderColor: PropTypes.string.isRequired
          }).isRequired
        }),
        path: PropTypes.string.isRequired,
        thirdLevelItems: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            tag: PropTypes.oneOf([
              'legacy',
              'beta',
              'fundamentals',
              'new',
              'custom'
            ]),
            /* Required if tag is set to `custom` */
            customTagProps: PropTypes.shape({
              customLabel: PropTypes.string.isRequired,
              customTooltipText: PropTypes.string.isRequired,
              customStyles: PropTypes.shape({
                background: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired,
                borderColor: PropTypes.string.isRequired
              }).isRequired
            }),
            path: PropTypes.string.isRequired
          })
        )
      })
    )
  }),
  onDropdownChange: PropTypes.func
};

export default NavigationAccordion;
