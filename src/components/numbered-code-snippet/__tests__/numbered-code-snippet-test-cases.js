import NumberedCodeSnippet from '../numbered-code-snippet';
import { highlightSwift } from '../../highlight/swift';

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

let highlightTheme = `
code[class*='language-'],
pre[class*='language-'] {
  color: #273d56;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #272822;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #53708e;
}

.token.punctuation {
  color: #273d56;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #314ccd;
}

.token.boolean,
.token.number {
  color: #7753eb;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #ce2c69;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #273d56;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #4264fb;
}

.token.keyword {
  color: #314ccd;
}

.token.regex,
.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
`;

testCases.basic = {
  component: NumberedCodeSnippet,
  description: 'Basic',
  props: {
    code: code,
    highlightedCode: highlightSwift(code),
    maxHeight: 450,
    highlightThemeCss: highlightTheme,
    copyRanges: [[6, 17]],
    onCopy: () => {}
  }
};

testCases.noCollapse = {
  component: NumberedCodeSnippet,
  description: "Don't collapse lines",
  props: {
    collapseLines: false,
    code: code,
    highlightedCode: highlightSwift(code),
    maxHeight: 450,
    highlightThemeCss: highlightTheme,
    copyRanges: [[21, 23], [38, 38]],
    onCopy: () => {}
  }
};

export { testCases };
