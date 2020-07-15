import findSelectedCode from '../find-selected';

const java = 'some java code string';
const kotlin = 'some kotlin code string';
test(`twoLanguagesKotlinPreferred`, () => {
  expect(findSelectedCode({ kotlin, java }, 'kotlin')).toEqual(kotlin);
});

test(`twoLanguagesJavaPreferred`, () => {
  expect(findSelectedCode({ kotlin, java }, 'java')).toEqual(java);
});

test(`onlyKotlinAvailableJavaPreferred`, () => {
  expect(findSelectedCode({ kotlin, undefined }, 'java')).toEqual(kotlin);
});

test(`onlyKotlinAvailableKotlinPreferred`, () => {
  expect(findSelectedCode({ kotlin, undefined }, 'kotlin')).toEqual(kotlin);
});

test(`onlyJavaAvailableKotlinPreferred`, () => {
  expect(findSelectedCode({ undefined, java }, 'kotlin')).toEqual(java);
});

test(`onlyJavaAvailableJavaPreferred`, () => {
  expect(findSelectedCode({ undefined, java }, 'java')).toEqual(java);
});
