import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestKitchen from '@mapbox/react-test-kitchen';
import componentIndex from './component-index'; // eslint-disable-line
import { UserContextProvider } from '../components/page-layout/context/user-context';

class App extends React.Component {
  render() {
    return (
      <UserContextProvider>
        <ReactTestKitchen
          projectTitle="dr-ui"
          componentIndex={componentIndex}
        />
      </UserContextProvider>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
