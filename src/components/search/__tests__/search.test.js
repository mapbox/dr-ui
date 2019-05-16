import React from 'react';
import Search from '../search';
import renderer from 'react-test-renderer';
import visit from 'unist-util-visit';

test('Search component, no options', () => {
  const component = renderer.create(<Search />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  visit(tree, 'input', node => {
    expect(node.props.placeholder).toBe('Search docs.mapbox.com');
  });
});

test('Search component, placeholder', () => {
  const component = renderer.create(<Search placeholder="Search me, ok?" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  visit(tree, 'input', node => {
    expect(node.props.placeholder).toBe('Search me, ok?');
  });
});

test('Search component, collapse', () => {
  const component = renderer.create(<Search collapse={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  visit(tree, 'input', node => {
    expect(node.props.placeholder).toBe('');
  });
});
