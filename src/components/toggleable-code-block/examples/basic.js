/*
Basic.
*/
import React from 'react';
import ToggleableCodeBlock from '../toggleable-code-block';
import { highlightJava } from '../../highlight/java';

export default class Basic extends React.PureComponent {
  render() {
    const javaCodeSnippet = `
    public class MainActivity extends AppCompatActivity {
      private MapView mapView;

      @Override
      protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      Mapbox.getInstance(this, "your-token");
      setContentView(R.layout.activity_main);
      mapView = (MapView) findViewById(R.id.mapView);
      mapView.onCreate(savedInstanceState);
    }
    `;

    return (
      <ToggleableCodeBlock
        id="test-java-filename"
        selectedLanguage="java"
        code={javaCodeSnippet}
        highlightedCode={highlightJava(javaCodeSnippet)}
        copyRanges={{
          java: [
            [2, 2],
            [5, 8]
          ]
        }}
        changeLanguage={() => {}}
        filename="ThisIsAFile.extension"
        link="https://github.com/mapbox/"
        limitHeight={true}
        options={[
          {
            label: 'JavaScript',
            language: 'javascript',
            preferredLanguage: false
          },
          {
            label: 'Swift',
            language: 'swift',
            preferredLanguage: false
          },
          {
            label: 'Objective-C',
            language: 'objectiveC',
            preferredLanguage: false
          },
          {
            label: 'Java',
            language: 'java',
            preferredLanguage: true
          },
          {
            label: 'Kotlin',
            language: 'kotlin',
            preferredLanguage: false
          }
        ]}
      />
    );
  }
}
