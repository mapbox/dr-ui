import React from 'react';
import components from './data/components'; // eslint-disable-line
import ComponentSection from './components/component-section';
import categories from './categories.json';

export default class App extends React.Component {
  componentDidMount() {
    // override SectionedNavigation scroll
    const sideBar = document.getElementById('dr-ui--page-layout-sidebar');
    if (!sideBar) return;
    sideBar.scrollTop = 0;
  }

  render() {
    const componentEls = Object.keys(categories).map((category) => {
      return (
        <div key={category}>
          <h2 className="txt-fancy txt-h3" id={category.toLowerCase()}>
            {category}
          </h2>
          {categories[category].map((comp) => {
            const component = components.filter((f) => f.name === comp)[0];
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
    return componentEls;
  }
}
