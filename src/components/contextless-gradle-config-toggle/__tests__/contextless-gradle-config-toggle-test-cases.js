import React from 'react';
import ContextlessAndroidActivityToggle from '../contextless-gradle-config-toggle';
import Basic from '../examples/basic';

const testCases = {};

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

const contextKotlin = {
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
    gradle: 'kotlin'
  },
  changeLanguage: {
    gradle: () => {}
  }
};

const groovy = `implementation 'com.mapbox.maps:android:10.0.0'`;

const kotlin = `implementation("com.mapbox.maps:android:10.0.0")`;

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.twoLang = {
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages (code toggle not interactive)',
  props: {
    context: contextGroovy,
    id: 'test-groovy-kotlin',
    groovy: groovy,
    kotlin: kotlin,
    limitHeight: true
  }
};

testCases.kotlinOnly = {
  component: ContextlessAndroidActivityToggle,
  description: 'Kotlin only',
  props: {
    context: contextGroovy,
    id: 'test-kotlin-only',
    kotlin: kotlin,
    limitHeight: true
  }
};

testCases.filename = {
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages with filename  (code toggle not interactive)',
  props: {
    context: contextKotlin,
    id: 'test-groovy-kotlin-filename',
    filename: 'build.gradle',
    link: 'https://github.com/mapbox/',
    groovy: groovy,
    kotlin: kotlin,
    limitHeight: true
  }
};

testCases.copyRange = {
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages with copy ranges (code toggle not interactive)',
  props: {
    context: contextKotlin,
    id: 'test-groovy-kotlin-copy-range',
    filename: 'build.gradle',
    link: 'https://github.com/mapbox/',
    groovy: groovy,
    kotlin: kotlin,
    limitHeight: true,
    copyRanges: {
      groovy: [[3, 4]],
      kotlin: [[2, 3]]
    }
  }
};

export { testCases };
