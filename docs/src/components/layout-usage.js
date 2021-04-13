import React from 'react';
import components from '../data/components';
import layoutConfig from '../../../src/components/page-layout/layout.config.js';

export default class LayoutUsage extends React.PureComponent {
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
                <td>{this.props.data[layout]}</td>
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
