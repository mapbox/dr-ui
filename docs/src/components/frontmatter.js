import React from 'react';
import components from '../data/components';

export default class FrontMatter extends React.Component {
  render() {
    const { frontMatter } = components.find(
      (f) => f.name === 'PageLayout'
    ).props;
    const { options, description } = frontMatter;
    return (
      <div className="mb18">
        {description}
        <details>
          <summary className="txt-bold cursor-pointer my18">
            See prop table
          </summary>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Required</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(options).map((opt) => {
                const val = options[opt];

                return (
                  <tr key={opt}>
                    <td>{opt}</td>
                    <td>
                      {val.name}{' '}
                      {val.value
                        ? `(${val.value.map((v) => v.value).join(', ')})`
                        : ''}
                    </td>
                    <td>{val.required ? 'TRUE' : 'FALSE'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </details>
      </div>
    );
  }
}
