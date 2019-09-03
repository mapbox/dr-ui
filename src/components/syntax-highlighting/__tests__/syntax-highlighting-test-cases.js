import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import { highlightSwift } from '../../../helpers/highlight-swift';
import { highlightObjectivec } from '../../../helpers/highlight-objectivec';
import { highlightJava } from '../../../helpers/highlight-java';
import { highlightJson } from '../../../helpers/highlight-json';
import { highlightJsx } from '../../../helpers/highlight-jsx';
import { highlightHtml } from '../../../helpers/highlight-html';
import { highlightXml } from '../../../helpers/highlight-xml';

const testCases = {};
const noRenderCases = {};

const css = `code[class*='language-'],
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
  Mapbox.getInstance(this, "token!");
  setContentView(R.layout.activity_main);
  mapView = (MapView) findViewById(R.id.mapView);
  mapView.onCreate(savedInstanceState);
}
`;

const jsonCodeSnippet = `{
  json: {
    this: "is",
    json: [ 1, 2, 3 ]
  },
  "json-two": {
    "this-is": "also",
    json: [ true, false ]
  }
}`;

const jsxCodeSnippet = `import React from 'react';
import Button from '@mapbox/mr-ui/button';
import Icon from '@mapbox/mr-ui/icon';
import PopoverTrigger from '@mapbox/mr-ui/popover-trigger';

export default class BackToTopButton extends React.Component {
  getPopoverContent = () => {
    return <div className="txt-s">Back to top!</div>;
  };
  render() {
    return (
      <div className="block mx24 my24 z5">
        <PopoverTrigger
          respondsToClick={false}
          respondsToHover={true}
          content={this.getPopoverContent}
          popoverProps={{
            alignment: 'center',
            placement: 'top',
            padding: 'small'
          }}
        >
          <Button
            onClick={() => {
              document.documentElement.scrollTop = 0; // fallback
              window.scroll(0, 0);
            }}
            passthroughProps={{
              className:
                'btn--blue w60 h60 px0 round-full shadow-darken25 color-white flex-parent flex-parent--center-main flex-parent--center-cross'
            }}
          >
            <Icon name="arrow-up" size={30} />
          </Button>
        </PopoverTrigger>
      </div>
    );
  }
}`;

const htmlCodeSnippet = `<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>Display a map</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
</head>
<body>

<div id='map'></div>
<script>
mapboxgl.accessToken = 'token!';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
</script>

</body>
</html>`;

const xmlCodeSnippet = `<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:mapbox="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <com.mapbox.mapboxsdk.maps.MapView
        android:id="@+id/mapView"
        android:layout_width="0dp"
        android:layout_height="0dp"
        mapbox:layout_constraintBottom_toBottomOf="parent"
        mapbox:layout_constraintEnd_toEndOf="parent"
        mapbox:layout_constraintStart_toStartOf="parent"
        mapbox:layout_constraintTop_toTopOf="parent"
        mapbox:mapbox_cameraTargetLat="41.885"
        mapbox:mapbox_cameraTargetLng="-87.679"
        mapbox:mapbox_cameraTilt="60"
        mapbox:mapbox_cameraZoom="12" />

</android.support.constraint.ConstraintLayout>`;

testCases.basic = {
  component: CodeSnippet,
  description: 'Swift highlighting',
  props: {
    code: swiftCodeSnippet,
    highlightedCode: highlightSwift(swiftCodeSnippet),
    highlightThemeCss: css
  }
};

testCases.objc = {
  component: CodeSnippet,
  description: 'Objective C highlighting',
  props: {
    code: objectiveCCodeSnippet,
    highlightedCode: highlightObjectivec(objectiveCCodeSnippet),
    highlightThemeCss: css
  }
};

testCases.java = {
  component: CodeSnippet,
  description: 'Java highlighting',
  props: {
    code: javaCodeSnippet,
    highlightedCode: highlightJava(javaCodeSnippet),
    highlightThemeCss: css
  }
};

testCases.json = {
  component: CodeSnippet,
  description: 'JSON highlighting',
  props: {
    code: jsonCodeSnippet,
    highlightedCode: highlightJson(jsonCodeSnippet),
    highlightThemeCss: css
  }
};

testCases.jsx = {
  component: CodeSnippet,
  description: 'JSX highlighting',
  props: {
    code: jsxCodeSnippet,
    highlightedCode: highlightJsx(jsxCodeSnippet),
    highlightThemeCss: css
  }
};

testCases.html = {
  component: CodeSnippet,
  description: 'HTML highlighting',
  props: {
    code: htmlCodeSnippet,
    highlightedCode: highlightHtml(htmlCodeSnippet),
    highlightThemeCss: css
  }
};

testCases.xml = {
  component: CodeSnippet,
  description: 'XML highlighting',
  props: {
    code: xmlCodeSnippet,
    highlightedCode: highlightXml(xmlCodeSnippet),
    highlightThemeCss: css
  }
};

export { testCases, noRenderCases };
