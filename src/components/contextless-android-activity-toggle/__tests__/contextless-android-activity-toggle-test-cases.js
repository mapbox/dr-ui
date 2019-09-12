import ContextlessAndroidActivityToggle from '../contextless-android-activity-toggle';

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
  component: ContextlessAndroidActivityToggle,
  description: 'Basic',
  props: {
    context: contextJava,
    id: 'test-java-only',
    java: java,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.twoLang = {
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages',
  props: {
    context: contextJava,
    id: 'test-java-kotlin',
    java: java,
    kotlin: kotlin,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.filename = {
  component: ContextlessAndroidActivityToggle,
  description: 'Two languages with filename',
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
  description: 'Two languages with copy ranges',
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
