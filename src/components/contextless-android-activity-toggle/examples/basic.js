/*
Basic.
*/
import React from 'react';
import ContextlessAndroidActivityToggle from '../contextless-android-activity-toggle';

export default class Basic extends React.PureComponent {
  render() {
    const contextJava = {
      languages: {
        android: [
          {
            label: 'Java',
            value: 'java'
          },
          {
            label: 'Kotlin',
            value: 'kotlin'
          }
        ]
      },
      preferredLanguage: {
        android: 'java'
      },
      changeLanguage: {
        android: () => {}
      }
    };

    const java = `map.getStyle(new Style.OnStyleLoaded() {
      @Override
      public void onStyleLoaded(@NonNull Style style) {

        Layer settlementLabelLayer = style.getLayer("settlement-label");

        if (settlementLabelLayer != null) {
          settlementLabelLayer.setProperties(textField("{name_ru}"));
        }
      }
    });`;
    return (
      <ContextlessAndroidActivityToggle
        context={contextJava}
        id="test-java-only"
        java={java}
        limitHeight={true}
        onCopy={() => {}}
      />
    );
  }
}
