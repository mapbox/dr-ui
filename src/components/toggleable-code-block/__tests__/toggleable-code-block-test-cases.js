import ToggleableCodeBlock from '../toggleable-code-block';
import { highlightCodeBlock } from '../../../util/highlight-code-block';

const testCases = {};
const noRenderCases = {};

const swiftCodeSnippet = `
import Mapbox
  class ViewController: UIViewController {
  override func viewDidLoad() {
  super.viewDidLoad()

  let url = URL(string: "mapbox://styles/mapbox/streets-v10")
  let mapView = MGLMapView(frame: view.bounds, styleURL: url)
  mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
  mapView.setCenter(CLLocationCoordinate2D(latitude: 59.31, longitude: 18.06), zoomLevel: 9, animated: false)
  view.addSubview(mapView)
}
`;

const objectiveCCodeSnippet = `
#import "ViewController.h"
@import Mapbox;

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];

  NSURL *url = [NSURL URLWithString:@"mapbox://styles/mapbox/streets-v10"];
  MGLMapView *mapView = [[MGLMapView alloc] initWithFrame:self.view.bounds styleURL:url];
  mapView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
  [mapView setCenterCoordinate:CLLocationCoordinate2DMake(59.31, 18.06)
  zoomLevel:9
  animated:NO];
  [self.view addSubview:mapView];
}

@end
`;

const javaCodeSnippet = `
public class MainActivity extends AppCompatActivity {
  private MapView mapView;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  Mapbox.getInstance(this, "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2lqbmp1MzNhMDBud3VvbHhqbjY1cnV2cCJ9.uGJJU2wgtXzcBNc62vY4_A");
  setContentView(R.layout.activity_main);
  mapView = (MapView) findViewById(R.id.mapView);
  mapView.onCreate(savedInstanceState);
}
`;

testCases.basic = {
  component: ToggleableCodeBlock,
  description: 'Swift highlighting',
  props: {
    codeSnippet: [
      {
        language: 'swift',
        rawCode: swiftCodeSnippet,
        highlightedCode: highlightCodeBlock(swiftCodeSnippet),
        preferredLanguage: true
      },
      {
        language: 'objective-c',
        rawCode: objectiveCCodeSnippet,
        highlightedCode: highlightCodeBlock(objectiveCCodeSnippet),
        preferredLanguage: false
      }
    ]
  }
};

testCases.objc = {
  component: ToggleableCodeBlock,
  description: 'Objective C highlighting',
  props: {
    codeSnippet: [
      {
        language: 'swift',
        rawCode: swiftCodeSnippet,
        highlightedCode: highlightCodeBlock(swiftCodeSnippet),
        preferredLanguage: false
      },
      {
        language: 'objective-c',
        rawCode: objectiveCCodeSnippet,
        highlightedCode: highlightCodeBlock(objectiveCCodeSnippet),
        preferredLanguage: true
      }
    ]
  }
};

testCases.java = {
  component: ToggleableCodeBlock,
  description: 'Java highlighting',
  props: {
    codeSnippet: [
      {
        language: 'java',
        rawCode: javaCodeSnippet,
        highlightedCode: highlightCodeBlock(javaCodeSnippet),
        preferredLanguage: true
      },
      {
        language: 'kotlin',
        rawCode: '// Not available',
        highlightedCode: '// Not available',
        preferredLanguage: false
      }
    ]
  }
};

export { testCases, noRenderCases };
