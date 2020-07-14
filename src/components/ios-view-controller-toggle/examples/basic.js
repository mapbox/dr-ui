/*
Basic.
*/
import React from 'react';
import IosViewControllerToggle from '../ios-view-controller-toggle';

export default class Basic extends React.Component {
  render() {
    const swift = `
// 'style' in this case refers to an MGLStyle object.
let layer = style.layer(withIdentifier: "place-city-sm") as! MGLSymbolStyleLayer
let spanish = Locale(identifier: "es")
layer.text = layer.text.mgl_expressionLocalized(into: spanish)`;

    return (
      <IosViewControllerToggle
        id="test-swift-only"
        swift={swift}
        limitHeight={true}
        onCopy={() => {}}
      />
    );
  }
}
