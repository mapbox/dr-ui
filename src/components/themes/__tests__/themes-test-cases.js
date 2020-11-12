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
  element: <Note theme="error">error note</Note>
};

testCases.download = {
  description: 'download',
  element: <Note theme="download">download note</Note>
};

testCases.beta = {
  description: 'beta',
  element: (
    <div>
      <Note theme="beta">Beta note.</Note> <Tag theme="beta" />{' '}
      <Tag theme="beta" small={true} />
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
      <Note theme="legacy">legacy note</Note>
      <Tag theme="legacy" />
      <Tag theme="legacy" small={true} />
    </div>
  )
};

testCases.fundamentals = {
  description: 'fundamentals',
  element: (
    <div>
      <Tag theme="fundamentals" />
      <Tag theme="fundamentals" small={true} />
    </div>
  )
};

const customProps = {
  theme: 'custom',
  customLabel: 'Limited access',
  customTooltipText: 'Contact us for access to this feature.',
  customStyles: {
    background: '#FEDADA',
    color: '#DA2E30',
    borderColor: '#FD8383'
  }
};

testCases.custom = {
  description: 'Custom tag',
  element: (
    <div>
      <Tag {...customProps} />
      <Tag {...customProps} small={true} />
    </div>
  )
};

export { testCases, noRenderCases };
