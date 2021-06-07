import React from 'react';
import PropTypes from 'prop-types';
import ChevronousText from '@mapbox/mr-ui/chevronous-text';
import classnames from 'classnames';

export default class NextPrevPage extends React.PureComponent {
  renderLink(page, label) {
    return (
      <a
        href={page.path}
        className={classnames(
          'flex-child unprose block wmax240 color-gray color-gray-dark-on-hover',
          {
            'align-r': label === 'Next'
          }
        )}
      >
        <div className="txt-s txt-fancy txt-uppercase">
          <ChevronousText
            text={label}
            iconBefore={label === 'Next' ? false : true}
          />
        </div>
        <div className="txt-bold">{page.title}</div>
        <div className="txt-s none block-ml">{page.description}</div>
      </a>
    );
  }

  render() {
    const { pathname, frontMatter, navigation } = this.props;
    const sectionPath = navigation.hierarchy[pathname].section
      ? navigation.hierarchy[pathname].section.path
      : undefined;
    const pages = sectionPath
      ? navigation[sectionPath].navTabs[0].pages
      : navigation.navTabs[0].pages;
    const subPages =
      pages &&
      pages.find((x) => x.path === navigation.hierarchy[pathname].parent)
        .subPages;
    const nextPage =
      subPages &&
      subPages.find((x) => x.groupOrder === frontMatter.groupOrder + 1);
    const prevPage =
      subPages &&
      subPages.find((x) => x.groupOrder === frontMatter.groupOrder - 1);
    const prevPageRendered = prevPage ? (
      this.renderLink(prevPage, 'Previous')
    ) : (
      <div></div>
    );
    const nextPageRendered = nextPage ? (
      this.renderLink(nextPage, 'Next')
    ) : (
      <div></div>
    );
    return (
      <React.Fragment>
        <div className="flex-parent flex-parent--space-between-main">
          {prevPageRendered}
          {nextPageRendered}
        </div>
      </React.Fragment>
    );
  }
}

NextPrevPage.propTypes = {
  pathname: PropTypes.string.isRequired,
  frontMatter: PropTypes.shape({
    groupOrder: PropTypes.number
  }),
  navigation: PropTypes.object.isRequired
};
