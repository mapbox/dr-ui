import React from 'react';
import PropTypes from 'prop-types';
import NavigationAccordion from '../../navigation-accordion';
import { findParentPath } from '../utils';

export default class PageSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  getParentPage() {
    const { navigation, location } = this.props;
    const pageIsTab = navigation.navTabs.some((tab) =>
      Object.prototype.hasOwnProperty.call(tab, location.pathname)
    );
    return pageIsTab
      ? location.pathname
      : findParentPath(navigation, location.pathname);
  }

  render() {
    const { navigation, location, constants } = this.props;

    return (
      <NavigationAccordion
        navigation={navigation}
        location={location}
        constants={constants}
        parentPage={this.getParentPage()}
      />
    );
  }
}

PageSidebar.propTypes = {
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired
  }).isRequired
};
