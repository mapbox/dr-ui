import React from 'react';
import PropTypes from 'prop-types';
import { routeToPrefixed } from '@mapbox/batfish/modules/route-to';
import NavigationAccordion from '../../../../navigation-accordion/navigation-accordion';
import { buildSecondLevel } from './helpers';

export default class SidebarAccordion extends React.PureComponent {
  render() {
    const { frontMatter, headings, location, navItems } = this.props;

    return (
      <div className="mx0-mm ml-neg24 mr-neg36 relative-mm absolute right left">
        <NavigationAccordion
          currentPath={location.pathname}
          contents={{
            firstLevelItems: navItems,
            secondLevelItems: buildSecondLevel(frontMatter, headings)
          }}
          onDropdownChange={(value) => {
            routeToPrefixed(value);
          }}
        />
      </div>
    );
  }
}

SidebarAccordion.propTypes = {
  navItems: PropTypes.array,
  frontMatter: PropTypes.shape({
    headings: PropTypes.array,
    beta: PropTypes.array
  }),
  headings: PropTypes.array,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};
