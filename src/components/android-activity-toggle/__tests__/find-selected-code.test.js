import { findSelectedCode } from '../android-activity-toggle';

test(`twoLanguagesKotlinPreferred`, () => {
  expect(
    findSelectedCode(
      'some kotlin code string',
      'some java code string',
      'kotlin'
    )
  ).toEqual('some kotlin code string');
});

test(`twoLanguagesJavaPreferred`, () => {
  expect(
    findSelectedCode('some kotlin code string', 'some java code string', 'java')
  ).toEqual('some java code string');
});

test(`onlyKotlinAvailableJavaPreferred`, () => {
  expect(
    findSelectedCode('some kotlin code string', undefined, 'java')
  ).toEqual('some kotlin code string');
});

test(`onlyKotlinAvailableKotlinPreferred`, () => {
  expect(
    findSelectedCode('some kotlin code string', undefined, 'kotlin')
  ).toEqual('some kotlin code string');
});

test(`onlyJavaAvailableKotlinPreferred`, () => {
  expect(
    findSelectedCode(undefined, 'some java code string', 'kotlin')
  ).toEqual('some java code string');
});

test(`onlyJavaAvailableJavaPreferred`, () => {
  expect(findSelectedCode(undefined, 'some java code string', 'java')).toEqual(
    'some java code string'
  );
});
