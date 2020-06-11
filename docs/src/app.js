import React from 'react';
import components from './data/components'; // eslint-disable-line
import ComponentSection from './components/component-section';
import Sidebar from './components/sidebar';
import Topbar from '../../src/components/topbar';
import ProductMenu from '../../src/components/product-menu';
import OverviewHeader from '../../src/components/overview-header';
import Note from '../../src/components/note';
import PageLayout from '../../src/components/page-layout';
import categories from './categories.json';

const version = require('../../package.json').version;

export default class App extends React.Component {
  componentDidMount() {
    // override SectionedNavigation scroll
    const sideBar = document.getElementById('dr-ui--page-layout-sidebar');
    if (!sideBar) return;
    sideBar.scrollTop = 0;
  }
  render() {
    const componentEls = Object.keys(categories).map(category => {
      return (
        <div key={category}>
          <h2 className="txt-fancy txt-h3" id={category.toLowerCase()}>
            {category}
          </h2>
          {categories[category].sort().map(comp => {
            const component = components.filter(f => f.name === comp)[0];
            return (
              <div
                key={component.name}
                className="pt30 mb30 border-t border--darken10"
              >
                <ComponentSection data={component} />
              </div>
            );
          })}
        </div>
      );
    });
    return (
      <div>
        <Topbar>
          <div className="limiter">
            <div className="grid">
              <div className="col col--4-mm col--12">
                <div className="ml18-mm pt12" style={{ height: 52 }}>
                  <ProductMenu productName="Dr. UI" homePage="/dr-ui/" />
                </div>
              </div>
            </div>
          </div>
        </Topbar>
        <div className="limiter">
          <PageLayout
            sideBarColSize={3}
            sidebarContentStickyTop={0}
            sidebarContentStickyTopNarrow={0}
            sidebarContent={<Sidebar />}
          >
            <div className="prose">
              <OverviewHeader
                features={[
                  'React components',
                  'Support for IE11 and all modern browsers'
                ]}
                image={<div />}
                title="Dr. UI"
                version={version}
                changelogLink="https://github.com/mapbox/dr-ui/blob/master/CHANGELOG.md"
                installLink="https://github.com/mapbox/dr-ui/blob/master/README.md"
                ghLink="https://github.com/mapbox/dr-ui"
              />

              <p>
                Pronounced "Doctor UI". <strong>D</strong>ocumentation{' '}
                <strong>R</strong>eact <strong>UI</strong> components.{' '}
                <a href="https://mapbox.github.io/mr-ui/">See @mapbox/mr-ui</a>.
              </p>

              <p>UI components for Mapbox documentation projects.</p>

              <Note>
                <p>
                  This project is for internal Mapbox usage. The code is open
                  source and we appreciate bug reports; but we will only
                  consider feature requests and pull requests from Mapbox
                  developers.
                </p>
              </Note>
            </div>
            {componentEls}
          </PageLayout>
        </div>
      </div>
    );
  }
}
