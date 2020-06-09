import React from 'react';
import Note from '../note';

const testCases = {};
const noRenderCases = {};

const htmlSample = () => {
  return (
    <div>
      <p>
        You can create custom styles with{' '}
        <a href="https://studio.mapbox.com">Mapbox Studio</a> and then add them
        to your app. To programmatically add one of your custom styles to your{' '}
        <code>mapboxMap</code>, head to your{' '}
        <a href="https://studio.mapbox.com/styles/">styles page</a>, copy your
        style's <a href="/help/glossary/style-url/">style URL</a>, and then add
        it to your <code>mapboxMap</code> object with{' '}
        <code>setStyleUrl();</code>:
      </p>
      <pre className=" language-java">
        <code className=" language-java">
          mapboxMap<span className="token punctuation">.</span>
          <span className="token function">setStyle</span>
          <span className="token punctuation">(</span>
          <span className="token keyword">new</span>{' '}
          <span className="token class-name">Style</span>
          <span className="token punctuation">.</span>
          <span className="token class-name">Builder</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">)</span>
          <span className="token punctuation">.</span>
          <span className="token function">fromUri</span>
          <span className="token punctuation">(</span>
          <span className="token string">
            "mapbox://styles/your-mapbox-username/your-style-ID"
          </span>
        </code>
      </pre>
    </div>
  );
};

testCases.basic = {
  component: Note,
  description: 'Default note',
  props: {
    children: <p>Here is a little thing to note.</p>
  }
};

testCases.custom = {
  component: Note,
  description: 'Note with custom title.',
  props: {
    title: 'A very important note',
    children: htmlSample()
  }
};

testCases.warning = {
  component: Note,
  description:
    'A warning note to let the user know something has changed or will change.',
  props: {
    theme: 'warning',
    title: 'Be careful',
    children: htmlSample()
  }
};

testCases.legacy = {
  component: Note,
  description: 'A legacy note, has same styling as warning',
  props: {
    theme: 'warning',
    children: htmlSample()
  }
};

testCases.error = {
  component: Note,
  description:
    'A note to display an error with steps or links on how to troubleshoot.',
  props: {
    theme: 'error',
    children: htmlSample()
  }
};

testCases.new = {
  component: Note,
  description:
    'A note to display with a message about new products or features.',
  props: {
    theme: 'new',
    children: htmlSample()
  }
};

testCases.beta = {
  component: Note,
  description: 'A note to flag information about a beta release/product',
  props: {
    theme: 'beta',
    children: htmlSample()
  }
};

testCases.download = {
  component: Note,
  description: 'download',
  props: {
    theme: 'download',
    title: 'Download from vision.mapbox.com/install',
    children: htmlSample()
  }
};

export { testCases, noRenderCases };
