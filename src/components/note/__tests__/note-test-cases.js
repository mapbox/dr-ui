import React from 'react';
import Note from '../note';
import BookImage from '../../book-image/book-image';
import BookletImage from '../../booklet-image/booklet-image';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Note,
  description: 'A basic note',
  props: {
    children: <div>Here is a little thing to note.</div>,
    imageComponent: <BookImage />
  }
};

testCases.basic2 = {
  component: Note,
  description: 'A basic note with a different image',
  props: {
    children: <div>Here is a little thing to note.</div>,
    imageComponent: <BookletImage />
  }
};

testCases.basicThemed = {
  component: Note,
  description: 'A basic themed note',
  props: {
    children: <div>Here is a little note with pretty colors.</div>,
    imageComponent: <BookImage />,
    theme: {
      padding: '10px 10px 10px',
      background: 'pink',
      fontSize: '16px',
      lineHeight: '25px',
      color: 'blue'
    }
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
    imageComponent: <BookImage />
  }
};

export default { testCases, noRenderCases };
