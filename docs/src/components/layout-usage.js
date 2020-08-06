import React from 'react';
import components from '../data/components';
import layoutConfig from '../../../src/components/page-layout/layout.config.js';

const layoutUsage = {
  page:
    'A standard interior page with a table of contents sidebar and content area. This layout is often used by tutorials and guides.',
  accordion:
    'This layout uses the NavigationAccordion component to organize navigation across multiple pages. This layout is often used by guides or reference pages.',
  example:
    "This layout uses the SectionedNavigation component to display all topics for the site's examples. This layout is used by example pages.",
  exampleIndex:
    'This layout builds a homepage for an examples section. It organizes each example using the Cards component and uses the SectionedNavigation component to display all topics on the sidebar.',
  full:
    'This layout does not have a sidebar or standard content area. This layout is used for building a custom layout.'
};

export default class LayoutUsage extends React.Component {
  render() {
    const layouts = components
      .find((f) => f.name === 'PageLayout')
      .props.frontMatter.type.value.layout.value.map((v) =>
        v.value.replace(/[']/g, '')
      );
    return (
      <table>
        <thead>
          <tr>
            <th>Layout</th>
            <th>Usage</th>
            <th>Default configuration</th>
          </tr>
        </thead>
        <tbody>
          {layouts.map((layout) => {
            return (
              <tr key={layout}>
                <td>
                  <code>{layout}</code>
                </td>
                <td>{layoutUsage[layout]}</td>
                <td>
                  <pre>
                    <code>{JSON.stringify(layoutConfig[layout], null, 2)}</code>
                  </pre>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
