import React from 'react';
import PropTypes from 'prop-types';
import RelatedPage from '../../related-page';
import { getSubPages } from '../utils.js';
export default class NextPage extends React.PureComponent {
  render() {
    const {
      pathname,
      frontMatter,
      navigation
    } = this.props;
    const subPages = getSubPages(navigation, pathname, frontMatter);
    const nextPage = subPages && subPages.find(x => x.groupOrder === frontMatter.groupOrder + 1);
    // If there isn't a next page, return an empty div
    if (!nextPage) return /*#__PURE__*/React.createElement("div", null);
    return /*#__PURE__*/React.createElement(RelatedPage, {
      label: "Next",
      title: nextPage.title,
      url: nextPage.path
    }, nextPage.description);
  }
}