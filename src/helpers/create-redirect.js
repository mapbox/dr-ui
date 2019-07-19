import React from 'react';

export function createRedirect(target) {
  return class Redirect extends React.Component {
    componentDidMount() {
      window.location.href = target;
    }

    render() {
      return null;
    }
  };
}
