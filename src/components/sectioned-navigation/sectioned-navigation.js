import React from 'react';
import PropTypes from 'prop-types';
import SectionedNavigationSection from './sectioned-navigation-section';
import ControlText from '@mapbox/mr-ui/control-text';

class SectionedNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
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
      <div className="mb3">
        <ControlText
          onChange={(e) => this.setState({ filter: e }, this.filterResults)}
          value={this.state.filter}
          id="filter"
          type="text"
          themeControlWrapper="bg-white"
          name="filter"
          placeholder="Filter list"
        />
      </div>
    );
  }

  render() {
    const { props } = this;

    const filter = this.state.filter.toLowerCase().trim();
    const visibleSections = this.props.sections
      .filter((section) => {
        const matchedItems = section.items.filter((item) => {
          return (
            item.text.toLowerCase().indexOf(filter) > -1 ||
            (item.description && item.description.indexOf(filter) > -1)
          );
        });
        return matchedItems.length > 0;
      })
      .map((filteredSection) => {
        const filteredItems = filteredSection.items.filter((item) => {
          return (
            item.text.toLowerCase().indexOf(filter) > -1 ||
            (item.description && item.description.indexOf(filter) > -1)
          );
        });
        return {
          title: filteredSection.title,
          url: filteredSection.url,
          items: filteredItems,
          id: filteredSection.id || undefined
        };
      });
    return (
      <div className="mx24" data-swiftype-index="false">
        {this.renderTitle()}
        {this.renderFilterBar()}
        {visibleSections.map((section, i) => (
          <React.Fragment key={i}>
            <SectionedNavigationSection
              includeCount={props.includeCount}
              hideSubItems={props.hideSubItems}
              {...section}
            />
          </React.Fragment>
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
