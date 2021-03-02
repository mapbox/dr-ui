/*
Basic.
*/
import React from 'react';
import Browser from '../browser';

export default class Basic extends React.Component {
  render() {
    return (
      <Browser>
        <img
          src="../files/browser-example.png"
          className="round-b"
          alt="Manage styles in Studio."
        />
      </Browser>
    );
  }
}
