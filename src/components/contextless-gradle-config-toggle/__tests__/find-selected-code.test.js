import { findSelectedCode } from '../contextless-gradle-config-toggle';

test(`twoLanguagesKotlinPreferred`, () => {
  expect(
    findSelectedCode(
      'some kotlin code string',
      'some groovy code string',
      'kotlin'
    )
  ).toEqual('some kotlin code string');
});

test(`twoLanguagesGroovyPreferred`, () => {
  expect(
    findSelectedCode(
      'some kotlin code string',
      'some groovy code string',
      'groovy'
    )
  ).toEqual('some groovy code string');
});

test(`onlyKotlinAvailableGroovyPreferred`, () => {
  expect(
    findSelectedCode('some kotlin code string', undefined, 'groovy')
  ).toEqual('some kotlin code string');
});

test(`onlyKotlinAvailableKotlinPreferred`, () => {
  expect(
    findSelectedCode('some kotlin code string', undefined, 'kotlin')
  ).toEqual('some kotlin code string');
});

test(`onlyGroovyAvailableKotlinPreferred`, () => {
  expect(
    findSelectedCode(undefined, 'some groovy code string', 'kotlin')
  ).toEqual('some groovy code string');
});

test(`onlyGroovyAvailableGroovyPreferred`, () => {
  expect(
    findSelectedCode(undefined, 'some groovy code string', 'groovy')
  ).toEqual('some groovy code string');
});
