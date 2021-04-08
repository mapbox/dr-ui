/*
Basic.
*/
import React from 'react';
import ToggleableCodeBlock from '../toggleable-code-block';
import { highlightJava } from '../../highlight/java';

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'java'
    };
  }

  changeLanguage = (language) => this.setState({ language });

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
        changeLanguage={this.changeLanguage}
        filename="ThisIsAFile.extension"
        link="https://github.com/mapbox/"
        limitHeight={true}
        options={[
          {
            label: 'JavaScript',
            language: 'javascript',
            preferredLanguage: this.state.language === 'javascript'
          },
          {
            label: 'Swift',
            language: 'swift',
            preferredLanguage: this.state.language === 'swift'
          },
          {
            label: 'Objective-C',
            language: 'objectiveC',
            preferredLanguage: this.state.language === 'objectiveC'
          },
          {
            label: 'Java',
            language: 'java',
            preferredLanguage: this.state.language === 'java'
          },
          {
            label: 'Kotlin',
            language: 'kotlin',
            preferredLanguage: this.state.language === 'kotlin'
          }
        ]}
      />
    );
  }
}
