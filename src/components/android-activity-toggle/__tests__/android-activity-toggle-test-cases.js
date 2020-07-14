import React from 'react';
import AndroidActivityToggle from '../android-activity-toggle';
import Basic from '../examples/basic';

const testCases = {};

const java = `map.getStyle(new Style.OnStyleLoaded() {
  @Override
  public void onStyleLoaded(@NonNull Style style) {

    Layer settlementLabelLayer = style.getLayer("settlement-label");

    if (settlementLabelLayer != null) {
      settlementLabelLayer.setProperties(textField("{name_ru}"));
    }
  }
});`;

const kotlin = `map?.getStyle {
  val settlementLabelLayer = it.getLayer("settlement-label")
  settlementLabelLayer?.setProperties(textField("{name_ru}"))
}`;

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.twoLang = {
  component: AndroidActivityToggle,
  description: 'Two languages',
  props: {
    id: 'test-java-kotlin',
    java: java,
    kotlin: kotlin,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.kotlinOnly = {
  component: AndroidActivityToggle,
  description: 'Kotlin only',
  props: {
    id: 'test-kotlin-only',
    kotlin: kotlin,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.filename = {
  component: AndroidActivityToggle,
  description: 'Two languages with filename',
  props: {
    id: 'test-java-kotlin-filename',
    filename: 'MainActivity',
    link: 'https://github.com/mapbox/',
    java: java,
    kotlin: kotlin,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.copyRange = {
  component: AndroidActivityToggle,
  description: 'Two languages with copy ranges',
  props: {
    id: 'test-java-kotlin-copy-range',
    filename: 'MainActivity',
    link: 'https://github.com/mapbox/',
    java: java,
    kotlin: kotlin,
    limitHeight: true,
    onCopy: () => {},
    copyRanges: {
      java: [[3, 4]],
      kotlin: [[2, 3]]
    }
  }
};

export { testCases };
