import React from 'react';
import SectionedNavigation from '../../../../sectioned-navigation/sectioned-navigation';
import PropTypes from 'prop-types';

export default class SidebarExamples extends React.PureComponent {
  render() {
    const { topics, hideSubItems, includeFilterBar, sidebarTitle } = this.props;
    return (
      <div className="none block-mm py12">
        <SectionedNavigation
          title={sidebarTitle}
          hideSubItems={hideSubItems}
          includeFilterBar={includeFilterBar}
          sections={topics.map((topic) => {
            return {
              title: topic.name,
              url: topic.url,
              items: topic.pages
            };
          })}
        />
      </div>
    );
  }
}

SidebarExamples.propTypes = {
  topics: PropTypes.array,
  hideSubItems: PropTypes.bool,
  includeFilterBar: PropTypes.bool,
  sidebarTitle: PropTypes.string
};
