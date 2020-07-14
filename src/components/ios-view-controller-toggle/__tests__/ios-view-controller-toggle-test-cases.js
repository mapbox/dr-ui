import React from 'react';
import IosViewControllerToggle from '../ios-view-controller-toggle';
import Basic from '../examples/basic';

const testCases = {};

const swift = `// 'style' in this case refers to an MGLStyle object.
let layer = style.layer(withIdentifier: "place-city-sm") as! MGLSymbolStyleLayer
let spanish = Locale(identifier: "es")
layer.text = layer.text.mgl_expressionLocalized(into: spanish)`;

const objectiveC = `// 'style' in this case refers to an MGLStyle object.
MGLSymbolStyleLayer *layer = (MGLSymbolStyleLayer *)[style layerWithIdentifier:@"place-city-sm"];
NSLocale *spanish = [NSLocale localeWithLocaleIdentifier:@"es"];
layer.text = [layer.text mgl_expressionLocalizedIntoLocale:spanish];`;

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.twoLang = {
  component: IosViewControllerToggle,
  description: 'Two languages',
  props: {
    id: 'test-java-kotlin',
    swift: swift,
    objectiveC: objectiveC,
    limitHeight: true
  }
};

testCases.filename = {
  component: IosViewControllerToggle,
  description: 'Two languages with filename',
  props: {
    id: 'test-java-kotlin-filename',
    filename: 'ViewController',
    link: 'https://github.com/mapbox/',
    swift: swift,
    objectiveC: objectiveC,
    limitHeight: true
  }
};

testCases.copyRange = {
  component: IosViewControllerToggle,
  description: 'Two languages with copy ranges',
  props: {
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
