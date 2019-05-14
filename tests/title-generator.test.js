'use strict';

const tagger = require('../src/components/search/title-generator.js');

describe('titleGenerator', () => {
  it('no duplicated values', () => {
    expect(tagger.titleGenerator('iOS', 'iOS', 'iOS')).toEqual(['iOS']);
  });

  it('no duplicated values', () => {
    expect(tagger.titleGenerator('Rerouting', 'iOS', 'iOS')).toEqual([
      'Rerouting',
      'iOS'
    ]);
  });

  it('do not display subsite if it does not exist', () => {
    expect(tagger.titleGenerator('Rerouting', 'iOS')).toEqual([
      'Rerouting',
      'iOS'
    ]);
  });

  it('remove redundancy from subsite', () => {
    expect(
      tagger.titleGenerator('Rerouting', 'Maps SDK for iOS', 'iOS')
    ).toEqual(['Rerouting', 'Maps SDK', 'iOS']);
  });

  it('no "Introduction" as title', () => {
    expect(
      tagger.titleGenerator('Introduction', 'Maps SDK for iOS', 'iOS')
    ).toEqual(['Maps SDK', 'iOS']);
  });

  it('no "Introduction" as title', () => {
    expect(tagger.titleGenerator('Introduction', 'iOS')).toEqual(['iOS']);
  });
});
