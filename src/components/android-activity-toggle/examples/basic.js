/*
Basic.
*/
import React from 'react';
import AndroidActivityToggle from '../android-activity-toggle';

export default class Basic extends React.Component {
  render() {
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
      <AndroidActivityToggle
        id="test-java-only"
        java={java}
        limitHeight={true}
        onCopy={() => {}}
      />
    );
  }
}
