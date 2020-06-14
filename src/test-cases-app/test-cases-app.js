import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestKitchen from '@mapbox/react-test-kitchen';
import componentIndex from './component-index'; // eslint-disable-line

class App extends React.Component {
  render() {
    return (
      <ReactTestKitchen projectTitle="dr-ui" componentIndex={componentIndex} />
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
