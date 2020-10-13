import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../../src/components/page-layout';
import Helmet from 'react-helmet';
import Sidebar from './sidebar';
import navigation from '@mapbox/batfish/data/navigation'; // eslint-disable-line
import topics from '@mapbox/batfish/data/topics'; // eslint-disable-line
import constants from '../constants';

class PageShell extends React.Component {
  render() {
    const { children, location, frontMatter, headings } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <base href="/dr-ui/" />
        </Helmet>
        <PageLayout
          includeFilterBar={true}
          topBarSticker={false}
          topics={topics}
          headings={headings}
          frontMatter={frontMatter}
          location={location}
          constants={constants}
          navigation={navigation}
          customSidebar={
            location.pathname === '/dr-ui/' ? <Sidebar /> : undefined
          }
        >
          {children}
        </PageLayout>
      </React.Fragment>
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
