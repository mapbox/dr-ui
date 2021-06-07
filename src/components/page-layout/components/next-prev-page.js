import React from 'react';
import PropTypes from 'prop-types';
import ChevronousText from '@mapbox/mr-ui/chevronous-text';
import classnames from 'classnames';
import { getSubPages } from '../utils.js';

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
    const subPages = getSubPages(navigation, pathname, frontMatter);
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
