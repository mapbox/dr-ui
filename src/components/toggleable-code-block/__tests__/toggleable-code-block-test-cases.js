import ToggleableCodeBlock from '../toggleable-code-block';
import { highlightJava } from '../../../helpers/highlight-java';

const testCases = {};
const noRenderCases = {};

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

testCases.basic = {
  component: ToggleableCodeBlock,
  description: 'Java highlighting',
  props: {
    id: 'test-java-filename',
    selectedLanguage: 'java',
    code: javaCodeSnippet,
    highlightedCode: highlightJava(javaCodeSnippet),
    copyRanges: {
      java: [[2, 2], [5, 8]]
    },
    options: [
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
    ],
    changeLanguage: () => {},
    filename: 'ThisIsAFile.extension',
    link: 'https://github.com/mapbox/',
    limitHeight: true
  }
};

export { testCases, noRenderCases };
