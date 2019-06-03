import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestKitchen from '@mapbox/react-test-kitchen';
import componentIndex from './component-index'; // eslint-disable-line
import '@mapbox/web-analytics'; // exposes global `initializeMapboxAnalytics()` function

class App extends React.Component {
  componentDidMount() {
    if (window && window.initializeMapboxAnalytics) {
      window.initializeMapboxAnalytics();
    }
  }

  render() {
    return <ReactTestKitchen componentIndex={componentIndex} />;
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
