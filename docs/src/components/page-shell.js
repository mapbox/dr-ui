import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../../src/components/page-layout';

import categories from '../categories.json';
// import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line
import constants from '../constants';

const slug = (string) => string.toLowerCase();

class PageShell extends React.Component {
  render() {
    const { children, location, frontMatter } = this.props;
    const topics = {
      '/dr-ui/': {
        topics: Object.keys(categories).map((category) => ({
          name: category,
          url: `#${slug(category)}`,
          id: `${slug(category)}`,
          pages: categories[category].map((item) => ({
            text: item,
            url: `#${slug(item)}`
          }))
        }))
      }
    };

    const navigation = {
      hierarchy: {
        '/dr-ui/': {
          parent: '/dr-ui/'
        },
        '/dr-ui/changelog/': {
          parent: '/dr-ui/changelog/'
        }
      },
      navTabs: [
        {
          href: '/dr-ui/',
          id: '/dr-ui/',
          label: 'Overview'
        },
        {
          href: '/dr-ui/changelog/',
          id: '/dr-ui/changelog/',
          label: 'Changelog'
        }
      ]
    };

    return (
      <PageLayout
        includeFilterBar={true}
        topBarSticker={false}
        topics={topics}
        frontMatter={frontMatter}
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
  children: PropTypes.node.isRequired
};

export default PageShell;
