'use strict';

const { sortVersions } = require('../src/helpers/version-sort.js');
const allIosVersions = require('./sample/ios.json');

describe('pre-release', () => {
  const arr = [
    '4.9.0-beta.1',
    '4.9.0-alpha.2',
    '4.9.0-alpha.1',
    '4.8.0',
    '4.8.0-beta.1',
    '4.8.0-alpha.2',
    '4.8.0-alpha.1',
    '4.7.1'
  ];

  test(`allVersionsOrdered`, () => {
    expect(sortVersions(arr).allVersionsOrdered).toEqual([
      '4.9.0-alpha.1',
      '4.9.0-alpha.2',
      '4.9.0-beta.1',
      '4.8.0-alpha.1',
      '4.8.0-alpha.2',
      '4.8.0-beta.1',
      '4.8.0',
      '4.7.1'
    ]);
  });

  test(`latestStable`, () => {
    expect(sortVersions(arr).latestStable).toEqual('4.8.0');
  });

  test(`allLatestVersion`, () => {
    expect(sortVersions(arr).allLatestVersion).toEqual(/^4.8.0.+/);
  });

  test(`newestPreRelease`, () => {
    expect(sortVersions(arr).newestPreRelease).toEqual([
      '4.9.0-beta.1',
      '4.9.0-alpha.2',
      '4.9.0-alpha.1'
    ]);
  });

  test(`versionsToDisplay`, () => {
    expect(sortVersions(arr).versionsToDisplay).toEqual(['4.8.0', '4.7.1']);
  });
});

describe('ios', () => {
  test(`allVersionsOrdered`, () => {
    expect(sortVersions(allIosVersions).allVersionsOrdered).toEqual([
      '5.0.0',
      '4.12.0-beta.1',
      '4.12.0-alpha.2',
      '4.12.0-alpha.1',
      '4.11.0',
      '4.11.0-beta.2',
      '4.11.0-beta.1',
      '4.11.0-alpha.2',
      '4.11.0-alpha.1',
      '4.10.0',
      '4.10.0-beta.3',
      '4.10.0-beta.2',
      '4.10.0-beta.1',
      '4.10.0-alpha.2',
      '4.10.0-alpha.1',
      '4.9.0',
      '4.9.0-alpha.2',
      '4.9.0-alpha.1',
      '4.9.0-beta.1',
      '4.8.0',
      '4.8.0-beta.1',
      '4.8.0-alpha.2',
      '4.8.0-alpha.1',
      '4.7.1',
      '4.7.0-alpha.2',
      '4.7.0-beta.2',
      '4.7.0-beta.1',
      '4.7.0-alpha.3',
      '4.7.0-alpha.1',
      '4.7.0',
      '4.6.0',
      '4.6.0-beta.1',
      '4.6.0-alpha.2',
      '4.6.0-alpha.1',
      '4.5.0',
      '4.5.0-beta.1',
      '4.5.0-alpha.2',
      '4.5.0-alpha.1',
      '4.4.1',
      '4.4.0',
      '4.4.0-alpha.1',
      '4.4.0-beta.1',
      '4.4.0-alpha.2',
      '4.3.0-beta.1',
      '4.3.0',
      '4.3.0-alpha.2',
      '4.3.0-alpha.1',
      '4.2.0',
      '4.2.0-alpha.1',
      '4.2.0-alpha.2',
      '4.1.1',
      '4.1.0-alpha.1',
      '4.1.0-beta.1',
      '4.1.0',
      '4.0.5',
      '4.0.4',
      '4.0.3',
      '4.0.2',
      '4.0.1',
      '4.0.0-rc.1',
      '4.0.0-beta.3',
      '4.0.0-beta.1',
      '4.0.0-beta.2',
      '4.0.0',
      '3.7.8',
      '3.7.7',
      '3.7.6',
      '3.7.5',
      '3.7.4',
      '3.7.3',
      '3.7.2',
      '3.7.1',
      '3.7.0',
      '3.7.0-alpha.1',
      '3.7.0-beta.2',
      '3.7.0-beta.1',
      '3.7.0-rc.1',
      '3.7.0-beta.4',
      '3.7.0-beta.3',
      '3.6.4',
      '3.6.3',
      '3.6.2',
      '3.6.1',
      '3.6.0-rc.1',
      '3.6.0-beta.3',
      '3.6.0-beta.2',
      '3.6.0-beta.1',
      '3.6.0-alpha.1',
      '3.6.0',
      '3.5.4',
      '3.5.3',
      '3.5.2',
      '3.5.1',
      '3.5.0',
      '3.5.0-beta.1',
      '3.5.0-rc.1',
      '3.5.0-beta.3',
      '3.5.0-beta.2',
      '3.5.0-rc.2',
      '3.4.2',
      '3.4.1',
      '3.4.0',
      '3.4.0-rc.1',
      '3.4.0-beta.7',
      '3.4.0-alpha.3',
      '3.4.0-beta.5',
      '3.4.0-beta.4',
      '3.4.0-alpha.2',
      '3.4.0-beta.3',
      '3.4.0-alpha.1',
      '3.4.0-beta.6',
      '3.4.0-beta.2',
      '3.4.0-beta.1',
      '3.4.0-alpha.5',
      '3.4.0-alpha.4',
      '3.3.7',
      '3.3.6',
      '3.3.5',
      '3.3.4',
      '3.3.3',
      '3.3.2',
      '3.3.1',
      '3.3.0-beta.2',
      '3.3.0',
      '3.3.0-rc.2',
      '3.3.0-rc.1',
      '3.3.0-beta.3',
      '3.3.0-alpha.1',
      '3.3.0-alpha.2',
      '3.3.0-beta.1',
      '3.3.0-alpha.3',
      '3.2.3',
      '3.2.2',
      '3.2.2-rc.1',
      '3.2.1',
      '3.2.0-pre.1',
      '3.2.0',
      '3.2.0-rc.1',
      '3.2.0-beta.3',
      '3.2.0-beta.2',
      '3.2.0-beta.1',
      '3.2.0-pre.3',
      '3.2.0-pre.2',
      '3.1.2',
      '3.1.1',
      '3.1.1-pre.1',
      '3.1.1-pre.2',
      '3.1.0-pre.3',
      '3.1.0',
      '3.1.0-pre.4',
      '3.1.0-pre.2',
      '3.1.0-pre.1'
    ]);
  });

  test(`latestStable`, () => {
    expect(sortVersions(allIosVersions).latestStable).toEqual('5.0.0');
  });

  test(`allLatestVersion`, () => {
    expect(sortVersions(allIosVersions).allLatestVersion).toEqual(/^5.0.0.+/);
  });

  test(`newestPreRelease`, () => {
    expect(sortVersions(allIosVersions).newestPreRelease).toEqual([]);
  });
  test(`versionsToDisplay`, () => {
    expect(sortVersions(allIosVersions).versionsToDisplay).toEqual([
      '5.0.0',
      '4.11.0',
      '4.10.0',
      '4.9.0',
      '4.8.0',
      '4.7.1',
      '4.7.0',
      '4.6.0',
      '4.5.0',
      '4.4.1',
      '4.4.0',
      '4.3.0',
      '4.2.0',
      '4.1.1',
      '4.1.0',
      '4.0.5',
      '4.0.4',
      '4.0.3',
      '4.0.2',
      '4.0.1',
      '4.0.0',
      '3.7.8',
      '3.7.7',
      '3.7.6',
      '3.7.5',
      '3.7.4',
      '3.7.3',
      '3.7.2',
      '3.7.1',
      '3.7.0',
      '3.6.4',
      '3.6.3',
      '3.6.2',
      '3.6.1',
      '3.6.0',
      '3.5.4',
      '3.5.3',
      '3.5.2',
      '3.5.1',
      '3.5.0',
      '3.4.2',
      '3.4.1',
      '3.4.0',
      '3.3.7',
      '3.3.6',
      '3.3.5',
      '3.3.4',
      '3.3.3',
      '3.3.2',
      '3.3.1',
      '3.3.0',
      '3.2.3',
      '3.2.2',
      '3.2.1',
      '3.2.0',
      '3.1.2',
      '3.1.1',
      '3.1.0'
    ]);
  });

  test(`newestPreRelease order`, () => {
    expect(
      sortVersions([
        '4.11.0-alpha.2',
        '4.10.0-beta.3',
        '4.11.0-alpha.1',
        '4.10.0-beta.2',
        '4.10.0-beta.1',
        '4.10.0-alpha.2',
        '4.10.0-alpha.1',
        '4.9.0',
        '4.9.0-beta.1',
        '4.9.0-alpha.2',
        '4.9.0-alpha.1',
        '4.8.0'
      ]).newestPreRelease
    ).toEqual([
      '4.11.0-alpha.2',
      '4.11.0-alpha.1',
      '4.10.0-beta.3',
      '4.10.0-beta.2',
      '4.10.0-beta.1',
      '4.10.0-alpha.2',
      '4.10.0-alpha.1'
    ]);
  });

  test(`newestPreRelease, no pre releases`, () => {
    expect(sortVersions(['4.9.0', '4.8.0']).newestPreRelease).toEqual([]);
  });
});
