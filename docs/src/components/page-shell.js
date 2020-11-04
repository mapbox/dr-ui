import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../../src/components/page-layout';
import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line
import topics from '@mapbox/batfish/data/topics'; // eslint-disable-line
import constants from '../constants';

import categories from '../categories.json';

const slug = (string) => string.toLowerCase();

const componentHeadings = Object.keys(categories).reduce((arr, category) => {
  arr.push({
    text: category,
    slug: slug(category),
    level: 2
  });
  categories[category].forEach((item) => {
    arr.push({
      text: item,
      slug: slug(item),
      level: 3
    });
  });
  return arr;
}, []);

class PageShell extends React.Component {
  render() {
    const { children, location, frontMatter, headings } = this.props;

    return (
      <PageLayout
        includeFilterBar={true}
        topics={topics}
        headings={headings}
        frontMatter={{
          ...frontMatter,
          ...(location.pathname === '/dr-ui/components/' && {
            headings: componentHeadings
          })
        }}
        location={location}
        constants={constants}
        navigation={navigation}
      >
        {children}
      </PageLayout>
    );
  }
}

PageShell.propTypes = {
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contentType: PropTypes.string,
    language: PropTypes.array,
    level: PropTypes.number,
    headings: PropTypes.array
  }).isRequired,
  children: PropTypes.node
};

export default PageShell;
