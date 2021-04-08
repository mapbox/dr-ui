import React from 'react';
import ContextlessAndroidActivityToggle from '../contextless-android-activity-toggle';
import Basic from '../examples/basic';

const testCases = {};

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

const contextKotlin = {
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
    android: 'kotlin'
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

const kotlin = `map?.getStyle {
  val settlementLabelLayer = it.getLayer("settlement-label")
  settlementLabelLayer?.setProperties(textField("{name_ru}"))
}`;

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.twoLang = {
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages (code toggle not interactive)',
  props: {
    context: contextJava,
    id: 'test-java-kotlin',
    java: java,
    kotlin: kotlin,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.kotlinOnly = {
  component: ContextlessAndroidActivityToggle,
  description: 'Kotlin only',
  props: {
    context: contextJava,
    id: 'test-kotlin-only',
    kotlin: kotlin,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.filename = {
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages with filename  (code toggle not interactive)',
  props: {
    context: contextKotlin,
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
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages with copy ranges (code toggle not interactive)',
  props: {
    context: contextKotlin,
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
