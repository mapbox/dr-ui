import React from 'react';
import PropTypes from 'prop-types';
import SectionedNavigationSection from './sectioned-navigation-section';

class SectionedNavigation extends React.Component {
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

  render() {
    const { props } = this;
    return (
      <div>
        {this.renderTitle()}
        {props.sections.map((section, i) => (
          <div key={i} className="mb24">
            <SectionedNavigationSection
              includeCount={props.includeCount}
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
  includeCount: PropTypes.bool
};

SectionedNavigation.defaultProps = {
  includeCount: true
};

export default SectionedNavigation;
