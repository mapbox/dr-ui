import React from 'react';
import NumberedCodeSnippet from '../numbered-code-snippet';
import { highlightSwift } from '../../highlight/swift';
import { highlightThemeCss } from '../../highlight/theme-css.js';
import Basic from '../examples/basic';

const testCases = {};

const code = `import UIKit
import Mapbox

class DDSCircleLayerTutorialViewController: UIViewController, MGLMapViewDelegate {

    override func viewDidLoad() {
        super.viewDidLoad()

        let mapView = MGLMapView(frame: view.bounds)
        mapView.styleURL = MGLStyle.lightStyleURL
        mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]

        mapView.setCenter(CLLocationCoordinate2D(latitude: 44.971, longitude: -93.261), zoomLevel: 10, animated: false)

        mapView.delegate = self
        view.addSubview(mapView)
    }

    func mapView(_ mapView: MGLMapView, didFinishLoading style: MGLStyle) {

        let source = MGLVectorTileSource(identifier: "historical-places", configurationURL: URL(string: "mapbox://examples.5zzwbooj")!)

        style.addSource(source)

        let layer = MGLCircleStyleLayer(identifier: "landmarks", source: source)

        layer.sourceLayerIdentifier = "HPC_landmarks-b60kqn"

        layer.circleColor = NSExpression(forConstantValue: #colorLiteral(red: 0.67, green: 0.28, blue: 0.13, alpha: 1))

        layer.circleOpacity = NSExpression(forConstantValue: 0.8)

        let zoomStops = [
            10: NSExpression(format: "(2018 - Constructi) / 30"),
            13: NSExpression(format: "(2018 - Constructi) / 10")
        ]

        layer.circleRadius = NSExpression(format: "mgl_interpolate:withCurveType:parameters:stops:($zoomLevel, 'linear', nil, %@)", zoomStops)

        style.addLayer(layer)
    }
}`;

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.noCollapse = {
  component: NumberedCodeSnippet,
  description: "Don't collapse lines",
  props: {
    collapseLines: false,
    code: code,
    highlightedCode: highlightSwift(code),
    maxHeight: 450,
    highlightThemeCss: highlightThemeCss,
    copyRanges: [
      [21, 23],
      [38, 38]
    ],
    onCopy: () => {}
  }
};

testCases.firstLine = {
  component: NumberedCodeSnippet,
  description: 'First line',
  props: {
    code: code,
    highlightedCode: highlightSwift(code),
    maxHeight: 450,
    highlightThemeCss: highlightThemeCss,
    copyRanges: [[1, 5]],
    onCopy: () => {}
  }
};

testCases.lastLine = {
  component: NumberedCodeSnippet,
  description: 'Last line',
  props: {
    code: code,
    highlightedCode: highlightSwift(code),
    maxHeight: 450,
    highlightThemeCss: highlightThemeCss,
    copyRanges: [[38, 42]],
    onCopy: () => {}
  }
};

export { testCases };
