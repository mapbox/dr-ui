import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../../src/components/page-layout';
import navigation from '@mapbox/batfish/data/navigation';
import filters from '@mapbox/batfish/data/filters';
import constants from '../constants';
import AppropriateImage from './appropriate-image';
import categories from '../categories.json';

const slug = (string) => string.toLowerCase();
const { version } = require('../../../package.json');

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
        filters={filters}
        headings={headings}
        frontMatter={{
          ...frontMatter,
          ...(location.pathname === '/dr-ui/components/' && {
            headings: componentHeadings,
            // handle dynamic values in OverviewHeader
            overviewHeader: {
              ...frontMatter.overviewHeader,
              version: version,
              image: <img src="/img/documentation-astronaut.png" alt="" />
            }
          })
        }}
        location={location}
        constants={constants}
        navigation={navigation}
        AppropriateImage={AppropriateImage}
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
