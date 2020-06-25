import React from 'react';
import Tag from '../../tag/tag';
import Note from '../../note/note';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.default = {
  description: 'Default',
  element: <Note>Default note</Note>
};

testCases.error = {
  description: 'error',
  element: (
    <div>
      {' '}
      <Note theme="error">error note</Note>
    </div>
  )
};

testCases.download = {
  description: 'download',
  element: (
    <div>
      {' '}
      <Note theme="download">download note</Note>
    </div>
  )
};

testCases.beta = {
  description: 'beta',
  element: (
    <div>
      <Note theme="beta">Beta note.</Note> <Tag theme="beta" />
    </div>
  )
};

testCases.new = {
  description: 'new',
  element: <Basic />
};

testCases.legacy = {
  description: 'legacy or warning',
  element: (
    <div>
      {' '}
      <Note theme="legacy">legacy note</Note>
      <Tag theme="legacy" />
    </div>
  )
};

testCases.fundamentals = {
  description: 'fundamentals',
  element: (
    <div>
      {' '}
      <Tag theme="fundamentals" />
    </div>
  )
};

testCases.custom = {
  component: Tag,
  description: 'Custom tag',
  props: {
    theme: 'custom',
    customLabel: 'Limited access',
    customTooltipText: 'Contact us for access to this feature.',
    customStyles: {
      background: '#FEDADA',
      color: '#DA2E30',
      borderColor: '#FD8383'
    }
  }
};

export { testCases, noRenderCases };
