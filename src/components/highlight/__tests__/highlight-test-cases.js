/* eslint-disable xss/no-mixed-html*/
import React from 'react';
import CodeSnippet from '../../code-snippet/code-snippet';
import { highlightObjectivec } from '../objectivec';
import { highlightJava } from '../java';
import { highlightJson } from '../json';
import { highlightJsx } from '../jsx';
import { highlightHtml } from '../html';
import { highlightXml } from '../xml';
import { highlightKotlin } from '../kotlin';
import { highlightCss } from '../css';
import { highlightGroovy } from '../groovy';
import { highlightThemeCss } from '../../highlight/theme-css.js';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

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

const kotlinCodeSnippet = `map?.getStyle {
  val settlementLabelLayer = it.getLayer("settlement-label")
  settlementLabelLayer?.setProperties(textField("{name_ru}"))
}`;

const cssCodeSnippet = `body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}`;

const groovyCodeSnippet = `repositories {
  mavenCentral()
}
dependencies {
  implementation 'com.mapbox.mapboxsdk:mapbox-android-sdk:8.5.0'
}`;

testCases.basic = {
  description: 'Swift highlighting',
  element: <Basic />
};

testCases.objc = {
  component: CodeSnippet,
  description: 'Objective C highlighting',
  props: {
    code: objectiveCCodeSnippet,
    highlighter: highlightObjectivec,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.java = {
  component: CodeSnippet,
  description: 'Java highlighting',
  props: {
    code: javaCodeSnippet,
    highlighter: highlightJava,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.json = {
  component: CodeSnippet,
  description: 'JSON highlighting',
  props: {
    code: jsonCodeSnippet,
    highlighter: highlightJson,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.jsx = {
  component: CodeSnippet,
  description: 'JSX highlighting',
  props: {
    code: jsxCodeSnippet,
    highlighter: highlightJsx,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.html = {
  component: CodeSnippet,
  description: 'HTML highlighting',
  props: {
    code: htmlCodeSnippet,
    highlighter: highlightHtml,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.xml = {
  component: CodeSnippet,
  description: 'XML highlighting',
  props: {
    code: xmlCodeSnippet,
    highlighter: highlightXml,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.kotlin = {
  component: CodeSnippet,
  description: 'Kotlin highlighting',
  props: {
    code: kotlinCodeSnippet,
    highlighter: highlightKotlin,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.css = {
  component: CodeSnippet,
  description: 'CSS highlighting',
  props: {
    code: cssCodeSnippet,
    highlighter: highlightCss,
    highlightThemeCss: highlightThemeCss
  }
};

testCases.groovy = {
  component: CodeSnippet,
  description: 'Groovy highlighting',
  props: {
    code: groovyCodeSnippet,
    highlighter: highlightGroovy,
    highlightThemeCss: highlightThemeCss
  }
};

export { testCases, noRenderCases };
