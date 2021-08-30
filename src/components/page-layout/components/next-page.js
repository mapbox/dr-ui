import React from 'react';
import PropTypes from 'prop-types';
import RelatedPage from '../../related-page';
import { getSubPages } from '../utils.js';

export default class NextPage extends React.PureComponent {
  render() {
    const { pathname, frontMatter, navigation } = this.props;
    const subPages = getSubPages(navigation, pathname, frontMatter);
    const nextPage =
      subPages &&
      subPages.find((x) => x.groupOrder === frontMatter.groupOrder + 1);
    // If there isn't a next page, return an empty div
    if (!nextPage) return <div />;
    return (
      <RelatedPage label="Next" title={nextPage.title} url={nextPage.path}>
        {nextPage.description}
      </RelatedPage>
    );
  }
}

NextPage.propTypes = {
  pathname: PropTypes.string.isRequired,
  frontMatter: PropTypes.shape({
    groupOrder: PropTypes.number
  }),
  navigation: PropTypes.object.isRequired
};
