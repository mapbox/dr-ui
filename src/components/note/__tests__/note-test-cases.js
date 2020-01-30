import React from 'react';
import Note from '../note';

const testCases = {};
const noRenderCases = {};

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
    children: (
      <div>
        <p>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus
          eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam
          eget risus varius blandit sit amet non magna.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum
          id ligula porta felis euismod semper. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <p>
          Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra
          augue. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem
          malesuada magna mollis euismod.
        </p>
      </div>
    )
  }
};

testCases.warning = {
  component: Note,
  description:
    'A warning note to let the user know something has changed or will change.',
  props: {
    theme: 'warning',
    title: 'Be careful',
    children: <p>This is a warning.</p>
  }
};

testCases.legacy = {
  component: Note,
  description: 'A legacy note, has same styling as warning',
  props: {
    theme: 'warning',
    children: <p>This is a legacy product.</p>
  }
};

testCases.error = {
  component: Note,
  description:
    'A note to display an error with steps or links on how to troubleshoot.',
  props: {
    theme: 'error',
    children: (
      <p>
        Did something not go as planned? Check out the{' '}
        <a href="#">troubleshooting guide</a>.
      </p>
    )
  }
};

testCases.new = {
  component: Note,
  description:
    'A note to display with a message about new products or features.',
  props: {
    theme: 'new',
    children: (
      <p>
        Style components in Mapbox Studio are now available in public beta for
        every user. To start building, log in to Studio or sign up for an
        account to start making your first map.
      </p>
    )
  }
};

testCases.beta = {
  component: Note,
  description: 'A note to flag information about a beta release/product',
  props: {
    theme: 'beta',
    children: (
      <p>
        Style components in Mapbox Studio are now available in public beta for
        every user. To start building, log in to Studio or sign up for an
        account to start making your first map.
      </p>
    )
  }
};

testCases.download = {
  component: Note,
  description: 'download',
  props: {
    theme: 'download',
    title: 'Download from vision.mapbox.com/install',
    children: (
      <p>
        You must download the relevant dependencies from
        vision.mapbox.com/install before continuing. You can download the
        dependency directly or import it into your project using Maven. This
        will require that you are logged into your Mapbox account.
      </p>
    )
  }
};

export { testCases, noRenderCases };
