import ContextlessIosViewControllerToggle from '../contextless-ios-view-controller-toggle';

const testCases = {};

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
  changeLanguage: () => {}
};

const contextObjectiveC = {
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
    ios: 'objectiveC'
  },
  changeLanguage: () => {}
};

const swift = `// 'style' in this case refers to an MGLStyle object.
let layer = style.layer(withIdentifier: "place-city-sm") as! MGLSymbolStyleLayer
let spanish = Locale(identifier: "es")
layer.text = layer.text.mgl_expressionLocalized(into: spanish)`;

const objectiveC = `// 'style' in this case refers to an MGLStyle object.
MGLSymbolStyleLayer *layer = (MGLSymbolStyleLayer *)[style layerWithIdentifier:@"place-city-sm"];
NSLocale *spanish = [NSLocale localeWithLocaleIdentifier:@"es"];
layer.text = [layer.text mgl_expressionLocalizedIntoLocale:spanish];`;

testCases.basic = {
  component: ContextlessIosViewControllerToggle,
  description: 'Basic',
  props: {
    context: contextSwift,
    id: 'test-java-only',
    swift: swift,
    limitHeight: true,
    onCopy: () => {}
  }
};

testCases.twoLang = {
  component: ContextlessIosViewControllerToggle,
  description: 'Two languages',
  props: {
    context: contextSwift,
    id: 'test-java-kotlin',
    swift: swift,
    objectiveC: objectiveC,
    limitHeight: true
  }
};

testCases.filename = {
  component: ContextlessIosViewControllerToggle,
  description: 'Two languages with filename',
  props: {
    context: contextObjectiveC,
    id: 'test-java-kotlin-filename',
    filename: 'ViewController',
    link: 'https://github.com/mapbox/',
    swift: swift,
    objectiveC: objectiveC,
    limitHeight: true
  }
};

testCases.copyRange = {
  component: ContextlessIosViewControllerToggle,
  description: 'Two languages with copy ranges',
  props: {
    context: contextObjectiveC,
    id: 'test-java-kotlin-copy-range',
    filename: 'ViewController',
    link: 'https://github.com/mapbox/',
    swift: swift,
    objectiveC: objectiveC,
    limitHeight: true,
    copyRanges: {
      swift: [[3, 4]],
      objectiveC: [[2, 3]]
    }
  }
};

export { testCases };
