import { returnGenericType, categories } from '../categories';

test('returnGenericType', () => {
  expect(returnGenericType('page')).toEqual('page');
  expect(returnGenericType('example')).toEqual('example');
  expect(returnGenericType('playground')).toEqual('playground');
  expect(returnGenericType('pages')).toEqual('content');
  expect(returnGenericType('section on AccessToken')).toEqual('content');
});

describe('categories', () => {
  describe('data shape', () => {
    const allCategories = categories({
      type: 'page',
      submitFeedback: jest.fn()
    });
    Object.keys(allCategories).forEach((category) => {
      const { helpful, children } = allCategories[category];
      test('must have `helpful`', () =>
        expect(typeof helpful === 'boolean').toBeTruthy());
      test('must have `children`', () => expect(children).toBeDefined());
    });
  });
  test('type: default', () => {
    expect(
      categories({ type: 'page', submitFeedback: jest.fn() })
    ).toMatchSnapshot();
  });
  test('type: example', () => {
    expect(
      categories({ type: 'example', submitFeedback: jest.fn() })
    ).toMatchSnapshot();
  });
  test('type: sectioned feedback', () => {
    expect(
      categories({ type: 'section on AccessToken', submitFeedback: jest.fn() })
    ).toMatchSnapshot();
  });
});
