import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class GuideGroupIndex extends React.PureComponent {
  render() {
    const { pathname, navigation } = this.props;
    const sectionPath = navigation.hierarchy[pathname].section
      ? navigation.hierarchy[pathname].section.path
      : undefined;
    const pages = sectionPath
      ? navigation[sectionPath].navTabs.find((x) => x.title === 'Guides').pages
      : navigation.navTabs.find((x) => x.title === 'Guides').pages;
    const subPages = pages && pages.find((x) => x.path === pathname).subPages;
    return (
      <React.Fragment>
        {subPages.map((subpage, i) => {
          return (
            <div
              className={classnames(
                'flex-parent flex-parent--start-cross mb12',
                {
                  'border-b border--gray-light pb12': i < subPages.length - 1
                }
              )}
            >
              <div className="flex-child txt-bold w240 flex-child--no-shrink">
                <a href={subpage.path}>{subpage.title}</a>
              </div>
              <div className="flex-child flex-child--grow">
                {subpage.description}
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

GuideGroupIndex.propTypes = {
  pathname: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};
