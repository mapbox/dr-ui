import React from 'react';
import components from '../data/components';

export default class OtherProps extends React.PureComponent {
  render() {
    const { props } = components.find((f) => f.name === 'PageLayout');
    const exclude = [
      'frontMatter',
      'navigation',
      'location',
      'topics',
      'children'
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props)
            .filter((f) => exclude.indexOf(f) === -1)
            .map((prop) => {
              const { description, type, options } = props[prop];
              return (
                <tr key={prop}>
                  <td>
                    <code>{prop}</code>
                  </td>
                  <td>
                    {type.name}{' '}
                    {options
                      ? JSON.stringify(Object.keys(options).map((m) => m))
                      : ''}
                  </td>
                  <td>{description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
