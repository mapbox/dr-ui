/*
Basic.
*/
import React from 'react';
import ContextlessIosViewControllerToggle from '../contextless-ios-view-controller-toggle';

export default class Basic extends React.PureComponent {
  render() {
    const contextSwift = {
      languages: {
        ios: [
          {
            label: 'Swift',
            value: 'swift'
          },
          {
            label: 'Objective-C',
            value: 'objectiveC'
          }
        ]
      },
      preferredLanguage: {
        ios: 'swift'
      },
      changeLanguage: {
        ios: () => {}
      }
    };

    const swift = `
// 'style' in this case refers to an MGLStyle object.
let layer = style.layer(withIdentifier: "place-city-sm") as! MGLSymbolStyleLayer
let spanish = Locale(identifier: "es")
layer.text = layer.text.mgl_expressionLocalized(into: spanish)`;

    return (
      <ContextlessIosViewControllerToggle
        context={contextSwift}
        id="test-swift-only"
        swift={swift}
        limitHeight={true}
      />
    );
  }
}
