import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestKitchen from '@mapbox/react-test-kitchen';
import componentIndex from './component-index';

class App extends React.Component {
  render() {
    return <ReactTestKitchen componentIndex={componentIndex} />;
  }
}

const container = document.createElement('div');
container.setAttribute('id', 'app');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
