/*
Basic.
*/
import React from 'react';
import ContextlessGradleConfigToggle from '../contextless-gradle-config-toggle';

export default class Basic extends React.PureComponent {
  render() {
    const contextGroovy = {
      languages: {
        gradle: [
          {
            label: 'Groovy',
            value: 'groovy'
          },
          {
            label: 'Kotlin',
            value: 'kotlin'
          }
        ]
      },
      preferredLanguage: {
        gradle: 'groovy'
      },
      changeLanguage: {
        gradle: () => {}
      }
    };

    const groovy = `map.getStyle(new Style.OnStyleLoaded() {
      @Override
      public void onStyleLoaded(@NonNull Style style) {

        Layer settlementLabelLayer = style.getLayer("settlement-label");

        if (settlementLabelLayer != null) {
          settlementLabelLayer.setProperties(textField("{name_ru}"));
        }
      }
    });`;
    return (
      <ContextlessGradleConfigToggle
        context={contextGroovy}
        id="test-groovy-only"
        groovy={groovy}
        limitHeight={true}
      />
    );
  }
}
