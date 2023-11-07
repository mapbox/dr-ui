import React from 'react';
import PropTypes from 'prop-types';
import { getSubPages } from '../utils.js';
import CardContainer from '../../card-container/card-container';
import Card from '../../card/card';
export default class GuideGroupIndex extends React.PureComponent {
  render() {
    const {
      pathname,
      navigation,
      frontMatter
    } = this.props;
    const subPages = getSubPages(navigation, pathname, frontMatter);
    if (!subPages.length) return /*#__PURE__*/React.createElement("div", null);
    return /*#__PURE__*/React.createElement(CardContainer, {
      fullWidthCards: true,
      cards: subPages.map(({
        title,
        description,
        path
      }) => /*#__PURE__*/React.createElement(Card, {
        key: title,
        title: title,
        description: description,
        path: path
      }))
    });
  }
}