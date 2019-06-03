/*
Basic.
*/
import React from 'react';
import ToggleableCodeBlock from '../toggleable-code-block';
import { highlightCodeBlock } from '../../../util/highlight-code-block';

export default class Example extends React.Component {
  render() {
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

    return (
      <ToggleableCodeBlock
        codeSnippet={[
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
        ]}
      />
    );
  }
}
