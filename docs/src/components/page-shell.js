import React from 'react';
import PropTypes from 'prop-types';
import Topbar from '../../../src/components/topbar';
import ProductMenu from '../../../src/components/product-menu';
import PageLayout from '../../../src/components/page-layout';
import Sidebar from '../components/sidebar';
import Toc from '../components/toc';
import TabList from '@mapbox/mr-ui/tab-list';

class PageShell extends React.Component {
  sidebarContent = () => {
    const { title, headings } = this.props.frontMatter;

    switch (title) {
      case 'Overview':
        return <Sidebar />;
      default:
        return <Toc headings={headings} />;
    }
  };
  render() {
    const { children, location } = this.props;
    const { pathname } = location;

    return (
      <div>
        <Topbar>
          <div className="limiter">
            <div className="grid">
              <div className="col col--3-mm col--12">
                <div className="ml18-mm pt12">
                  <ProductMenu productName="Dr. UI" homePage="/dr-ui/" />
                </div>
              </div>
              <div className="col col--5-mm col--12">
                <TabList
                  items={[
                    { label: 'Components', id: '/dr-ui/', href: '/dr-ui/' },
                    {
                      label: 'Changelog',
                      id: '/dr-ui/changelog/',
                      href: '/dr-ui/changelog/'
                    }
                  ]}
                  activeItem={pathname}
                  truncateBy={1}
                />
              </div>
            </div>
          </div>
        </Topbar>
        <div className="limiter">
          <PageLayout
            sideBarColSize={3}
            sidebarContentStickyTop={0}
            sidebarContentStickyTopNarrow={0}
            sidebarContent={this.sidebarContent()}
          >
            <div className="prose">{children}</div>
          </PageLayout>
        </div>
      </div>
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
