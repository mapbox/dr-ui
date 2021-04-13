/*
Using highlighter with CodeSnippet.
*/
import React from 'react';
import { highlightSwift } from '../swift';
import { highlightThemeCss } from '../theme-css.js';
import CodeSnippet from '../../code-snippet';

export default class Basic extends React.PureComponent {
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

    return (
      <CodeSnippet
        code={swiftCodeSnippet}
        highlighter={() => highlightSwift}
        highlightThemeCss={highlightThemeCss}
      />
    );
  }
}
