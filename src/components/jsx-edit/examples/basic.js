/*
Basic.
*/
import React from 'react';
import JsxEdit from '../jsx-edit';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <JsxEdit
        code={`function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}
      />
    );
  }
}
