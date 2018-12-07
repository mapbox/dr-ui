import React from 'react';
import PropTypes from 'prop-types';
import SectionedNavigationSection from './sectioned-navigation-section';

class SectionedNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      visibleSections: this.props.sections
    };
  }

  renderTitle() {
    const { props } = this;
    if (!props.title) {
      return null;
    }

    return (
      <div className="txt-l color-blue txt-fancy mb12 block-mm none">
        {props.title}
      </div>
    );
  }

  renderFilterBar() {
    const { props } = this;
    if (!props.includeFilterBar) {
      return null;
    }
    return (
      <div className="wmax360 mb24">
        <input
          onChange={e =>
            this.setState({ filter: e.target.value }, this.filterResults)
          }
          type="text"
          className="px6 py6 w-full border border--gray-light"
          name="filter"
          placeholder="Filter list"
        />
      </div>
    );
  }

  filterResults() {
    const filter = this.state.filter.toLowerCase().trim();
    const visibleSections = this.props.sections
      .filter(section => {
        const matchedItems = section.items.filter(item => {
          return item.text.toLowerCase().indexOf(filter) > -1;
        });
        return matchedItems.length > 0;
      })
      .map(filteredSection => {
        const filteredItems = filteredSection.items.filter(item => {
          return item.text.toLowerCase().indexOf(filter) > -1;
        });
        return {
          title: filteredSection.title,
          url: filteredSection.url,
          items: filteredItems
        };
      });
    this.setState({ visibleSections: visibleSections });
  }

  render() {
    const { props } = this;
    return (
      <div>
        {this.renderTitle()}
        {this.renderFilterBar()}
        {this.state.visibleSections.map((section, i) => (
          <div key={i} className="">
            <SectionedNavigationSection
              includeCount={props.includeCount}
              hideSubItems={props.hideSubItems}
              {...section}
            />
          </div>
        ))}
      </div>
    );
  }
}

SectionedNavigation.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  includeCount: PropTypes.bool,
  includeFilterBar: PropTypes.bool,
  hideSubItems: PropTypes.bool
};

SectionedNavigation.defaultProps = {
  includeCount: true,
  includeFilterBar: false,
  hideSubItems: false
};

export default SectionedNavigation;
