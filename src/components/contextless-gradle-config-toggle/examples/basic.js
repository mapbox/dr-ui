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
            label: 'Kotlin',
            value: 'kotlin'
          },
          {
            label: 'Groovy',
            value: 'groovy'
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

    const groovy = `android {
  defaultConfig {
      minSdkVersion 21
      targetSdkVersion 27
  }
}`;

    const kotlin = `android {
  defaultConfig {
      minSdkVersion(21)
      targetSdkVersion(27)
  }
}`;

    return (
      <ContextlessGradleConfigToggle
        context={contextGroovy}
        id="test-groovy-kotlin"
        kotlin={kotlin}
        groovy={groovy}
        limitHeight={true}
      />
    );
  }
}
