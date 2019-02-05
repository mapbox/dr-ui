import React from 'react';
import Note from '../note';
import BookImage from '../../book-image/book-image';
import WarningImage from '../../warning-image/warning-image';

const testCases = {};
const noRenderCases = {};

testCases.basicNote = {
  component: Note,
  description: 'A basic note',
  props: {
    children: <div>Here is a little thing to note.</div>,
    imageComponent: <BookImage size="60" />
  }
};

testCases.customTitle = {
  component: Note,
  description: 'Note with custom title',
  props: {
    title: 'A very important note',
    children: (
      <div>
        <p className="mb12">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus
          eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam
          eget risus varius blandit sit amet non magna.
        </p>
        <p className="mb12">
          Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum
          id ligula porta felis euismod semper. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <p className="mb12">
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
  description: 'A warning note',
  props: {
    theme: 'warning',
    title: 'This API is in beta',
    children: (
      <div>
        <p>
          Have you already installed the SDK? If so,{' '}
          <a href="#">click here to read our migration guide</a>.
        </p>
      </div>
    ),
    imageComponent: <WarningImage color="orange" size="60" />
  }
};

testCases.error = {
  component: Note,
  description: 'An error or troubleshooting note',
  props: {
    theme: 'error',
    title: 'Error',
    children: <div>Did something not go as planned?</div>,
    imageComponent: <WarningImage color="red" size="60" />
  }
};

export default { testCases, noRenderCases };
