'use strict';

const {
  cleanIosViewController
} = require('../src/helpers/clean-ios-view-controller.js');

describe('swift', () => {
  const sampleCode = `
import Mapbox

@objc(StudioStyleExample_Swift)

class StudioStyleExample_Swift: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        // Replace the string in the URL below with your custom style URL from Mapbox Studio.
        // Read more about style URLs here: https://www.mapbox.com/help/define-style-url/
        let styleURL = URL(string: "mapbox://styles/mapbox/outdoors-v9")
        let mapView = MGLMapView(frame: view.bounds,
                                styleURL: styleURL)
        mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]

        // Set the map’s center coordinate and zoom level.
        mapView.setCenter(CLLocationCoordinate2D(latitude: 45.52954,
                longitude: -122.72317),
                zoomLevel: 14, animated: false)
        view.addSubview(mapView)
    }
}`;

  test(`swiftClean`, () => {
    expect(cleanIosViewController(sampleCode)).toEqual(`
import Mapbox

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        // Replace the string in the URL below with your custom style URL from Mapbox Studio.
        // Read more about style URLs here: https://www.mapbox.com/help/define-style-url/
        let styleURL = URL(string: "mapbox://styles/mapbox/outdoors-v9")
        let mapView = MGLMapView(frame: view.bounds,
                                styleURL: styleURL)
        mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]

        // Set the map’s center coordinate and zoom level.
        mapView.setCenter(CLLocationCoordinate2D(latitude: 45.52954,
                longitude: -122.72317),
                zoomLevel: 14, animated: false)
        view.addSubview(mapView)
    }
}`);
  });
});

describe('ojective-c', () => {
  const sampleCode = `
#import "StudioStyleExample.h"
@import Mapbox;

NSString *const MBXExampleStudioStyle = @"StudioStyleExample";

@implementation StudioStyleExample

- (void)viewDidLoad {
    [super viewDidLoad];

    // Replace the string in the URL below with your custom style URL from Mapbox Studio.
    // Read more about style URLs here: https://www.mapbox.com/help/define-style-url/
    NSURL *styleURL = [NSURL URLWithString:@"mapbox://styles/mapbox/outdoors-v9"];
    MGLMapView *mapView = [[MGLMapView alloc] initWithFrame:self.view.bounds
                                                    styleURL:styleURL];

    mapView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;

    // Set the map’s center coordinate and zoom level.
    [mapView setCenterCoordinate:CLLocationCoordinate2DMake(45.52954, -122.72317)
                        zoomLevel:14
                        animated:NO];

    [self.view addSubview:mapView];
}

@end`;

  test(`objClean`, () => {
    expect(cleanIosViewController(sampleCode)).toEqual(`
#import "ViewController.h"
@import Mapbox;
@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    // Replace the string in the URL below with your custom style URL from Mapbox Studio.
    // Read more about style URLs here: https://www.mapbox.com/help/define-style-url/
    NSURL *styleURL = [NSURL URLWithString:@"mapbox://styles/mapbox/outdoors-v9"];
    MGLMapView *mapView = [[MGLMapView alloc] initWithFrame:self.view.bounds
                                                    styleURL:styleURL];

    mapView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;

    // Set the map’s center coordinate and zoom level.
    [mapView setCenterCoordinate:CLLocationCoordinate2DMake(45.52954, -122.72317)
                        zoomLevel:14
                        animated:NO];

    [self.view addSubview:mapView];
}

@end`);
  });
});
