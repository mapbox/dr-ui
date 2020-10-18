import React from 'react';
import Scrollspy from 'react-scrollspy';
import PropTypes from 'prop-types';
import { buildSitesNav } from './helpers';

export default class SidebarPage extends React.PureComponent {
  render() {
    const { navSites } = this.props;
    if (!navSites) return <div />;
    /* const sites = buildSections(this.props.navSites); */
    return (
      <div className="mx24 py12 none block-mm">
        {/* 
          * We should no longer need any scrollspy or a TOC
        <Scrollspy
          items={buildScollspyItems(sites)}
          currentClassName="txt-bold"
        >
          {buildToc(sites)}
        </Scrollspy> */}
        {buildSitesNav(navSites)}
      </div>
    );
  }
}

/*
 * Example:  
[
  {
    site: {
      sectionTitle: {
        title: 'Breakfast',
        path: '/meals/breakfast/'
      },
      sitePages: [
        {
          title: 'Eggs',
          path: '/meals/breakfast/eggs/'
        },
        {
          title: 'Pancakes',
          path: '/meals/breakfast/pancakes/'
        }
      ]
    }
  },
  {...}
] 
*/

SidebarPage.propTypes = {
  navSites: PropTypes.arrayOf(PropTypes.shape({
    site: PropTypes.shape({
      sectionTitle: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string
      }),
      sitePages: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string
      }))
    })
  }))
};
