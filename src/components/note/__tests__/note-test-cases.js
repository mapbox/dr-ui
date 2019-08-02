import React from 'react';
import Note from '../note';
import BookImage from '../../book-image/book-image';
import WarningImage from '../../warning-image/warning-image';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Note,
  description: 'A basic note to call out information on a page.',
  props: {
    children: <p>Here is a little thing to note.</p>,
    imageComponent: <BookImage size="60" />
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
    ),
    imageComponent: <BookImage size="60" />
  }
};

testCases.warning = {
  component: Note,
  description:
    'A warning note to let the user know something has changed or will change.',
  props: {
    theme: 'warning',
    title: 'This API is in beta',
    children: (
      <p>
        The API may change without advance notice during the preview period.
        Preview features are not supported for production use.
      </p>
    ),
    imageComponent: <WarningImage color="orange" size="60" />
  }
};

testCases.error = {
  component: Note,
  description:
    'A note to display an error with steps or links on how to troubleshoot.',
  props: {
    theme: 'error',
    title: 'Error',
    children: (
      <p>
        Did something not go as planned? Check out the{' '}
        <a href="#">troubleshooting guide</a>.
      </p>
    ),
    imageComponent: <WarningImage color="red" size="60" />
  }
};

testCases.new = {
  component: Note,
  description:
    'A note to display with a message about new products or features.',
  props: {
    theme: 'new',
    title: 'New!',
    children: (
      <p>
        Check out the new <a href="#">Pizza API</a>. Build the perfect pie!
      </p>
    ),
    imageComponent: <WarningImage color="green" size="60" />
  }
};

export { testCases, noRenderCases };
