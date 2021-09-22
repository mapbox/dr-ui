import React from 'react';
import PropTypes from 'prop-types';
import { getSubPages } from '../utils.js';
import CardContainer from '../../card-container/card-container';
import Card from '../../card/card';

export default class GuideGroupIndex extends React.PureComponent {
  render() {
    const { pathname, navigation, frontMatter } = this.props;
    const subPages = getSubPages(navigation, pathname, frontMatter);
    if (!subPages.length) return <div />;
    return (
      <CardContainer
        fullWidthCards={true}
        cards={subPages.map((page) => (
          <Card key={page.title} {...page} />
        ))}
      />
    );
  }
}

GuideGroupIndex.propTypes = {
  pathname: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  frontMatter: PropTypes.shape({
    group: PropTypes.bool
  })
};
