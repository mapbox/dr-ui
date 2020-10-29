import React from 'react';
import PropTypes from 'prop-types';
import NavigationPage from '../../navigation-page';
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
    const { navigation, location } = this.props;
    
    return (
      <NavigationPage
        navigation={navigation}
        location={location}
        parentPage={this.getParentPage()}
    />
    );
  }
}

PageSidebar.propTypes = {
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
