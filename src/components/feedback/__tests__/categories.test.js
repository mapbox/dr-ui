import { returnGenericType, categories } from '../categories';

test('returnGenericType', () => {
  expect(returnGenericType('page')).toEqual('page');
  expect(returnGenericType('example')).toEqual('example');
  expect(returnGenericType('playground')).toEqual('playground');
  expect(returnGenericType('pages')).toEqual('content');
  expect(returnGenericType('section on AccessToken')).toEqual('content');
});

describe('categories', () => {
  test('default', () => {
    expect(
      categories({ type: 'page', submitFeedback: jest.fn() })
    ).toMatchSnapshot();
  });
  test('example page', () => {
    expect(
      categories({ type: 'example', submitFeedback: jest.fn() })
    ).toMatchSnapshot();
  });
  test('sectioned feedback', () => {
    expect(
      categories({ type: 'section on AccessToken', submitFeedback: jest.fn() })
    ).toMatchSnapshot();
  });
});
