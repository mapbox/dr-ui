import RelatedPage from '../related-page';

const testCases = {};

testCases.tutorial = {
  component: RelatedPage,
  description: 'tutorial',
  props: {
    contentType: 'tutorial',
    title: 'First steps with the Mapbox Maps SDK for Android',
    description:
      'Walk through installing the Mapbox Maps SDK for Android, getting a map on the screen, and changing the map style.',
    url: 'https://docs.mapbox.com/help/tutorials/first-steps-android-sdk/'
  }
};

testCases.troubleshooting = {
  component: RelatedPage,
  description: 'troubleshooting',
  props: {
    contentType: 'troubleshooting',
    title: 'Collaboration best practices',
    description:
      'Learn best practices for setting up an account and collaborating on projects.',
    url:
      'https://docs.mapbox.com/help/troubleshooting/collaboration-best-practices/'
  }
};

testCases.guide = {
  component: RelatedPage,
  description: 'guide',
  props: {
    contentType: 'guide',
    title: 'Access tokens',
    description:
      'Learn how access tokens work and how to create and manage your access tokens.',
    url:
      'https://docs.mapbox.com/help/troubleshooting/collaboration-best-practices/'
  }
};

testCases.glossary = {
  component: RelatedPage,
  description: 'glossary',
  props: {
    contentType: 'glossary',
    title: 'zoom level',
    description: 'A zoom level determines how much of a map is visible.',
    url: 'https://docs.mapbox.com/help/glossary/zoom-level/'
  }
};

testCases.example = {
  component: RelatedPage,
  description: 'example',
  props: {
    contentType: 'example',
    title: 'Add a vector tile source',
    description: 'Add a vector source to a map and display it as a layer.',
    url:
      'https://docs.mapbox.com/android/maps/examples/add-a-vector-tile-source/'
  }
};

testCases.playground = {
  component: RelatedPage,
  description: 'playground',
  props: {
    contentType: 'playground',
    title: 'Tilequery API playground',
    description:
      'To create and run sample Tilequery API queries and see the results displayed on a map, use the Tilequery API playground.',
    url: 'https://docs.mapbox.com/playground/tilequery/'
  }
};

testCases.video = {
  component: RelatedPage,
  description: 'video',
  props: {
    contentType: 'video',
    title: 'How to eject a Style Component in Mapbox Studio',
    description:
      'Style Components provide sensible defaults and quick opportunities for customization by optimizing the most common property changes for styles and packaging them into simple drop-down options, sliders, and toggles.',
    vimeoId: '378704089',
    vimeoThumbnail: 'assets/vimeo_thumb.jpg'
  }
};

testCases.videoNoImage = {
  component: RelatedPage,
  description: 'video with svg image fallback',
  props: {
    contentType: 'video',
    title: 'How to eject a Style Component in Mapbox Studio',
    description:
      'Style Components provide sensible defaults and quick opportunities for customization by optimizing the most common property changes for styles and packaging them into simple drop-down options, sliders, and toggles.',
    vimeoId: '378704089'
  }
};

testCases.videoNoVimeo = {
  component: RelatedPage,
  description: 'video with url (no modal)',
  props: {
    contentType: 'video',
    title: 'How to eject a Style Component in Mapbox Studio',
    description:
      'Style Components provide sensible defaults and quick opportunities for customization by optimizing the most common property changes for styles and packaging them into simple drop-down options, sliders, and toggles.',
    url:
      'https://docs.mapbox.com/android/maps/examples/add-a-vector-tile-source/'
  }
};

testCases.fallback = {
  component: RelatedPage,
  description: 'fallback',
  props: {
    title: 'See all documentation',
    description: 'Browse all Mapbox documentation.',
    url: 'https://docs.mapbox.com/'
  }
};

export { testCases };
