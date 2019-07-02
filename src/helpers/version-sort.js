const compareVersions = require('compare-versions'); //eslint-disable-line

const sortBy = key => (a, b) =>
  a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;

export function sortVersions(versions) {
  // make sure versions are in order
  const allVersionsOrdered = versions.sort(compareVersions).reverse();
  // get the latest stable version
  const latestStable = allVersionsOrdered
    .filter(version => {
      return /alpha|beta|rc|pre/.test(version) === false;
    })
    .slice(0, 1)[0];
  // create regex to find prereleases for latest version
  const allLatestVersion = new RegExp(`^${latestStable}-.+`);
  // check for latest prereleases
  const latestVersionPreReleases = allVersionsOrdered.reduce((arr, version) => {
    if (allLatestVersion.test(version)) {
      arr.push({ version });
    }
    return arr;
  }, []);
  // check for any release greater than latesst
  const laterThanLatest = allVersionsOrdered.reduce((arr, version) => {
    if (compareVersions(version, latestStable) === 1) {
      arr.push({ version });
    }
    return arr;
  }, []);
  // if there is any prerelease greater than latest use that
  // else use the latest version's prereleases
  // else do nothing
  const sortPreReleases = laterThanLatest.length
    ? laterThanLatest
    : latestVersionPreReleases.length
    ? latestVersionPreReleases
    : [];

  const newestPreRelease =
    sortPreReleases &&
    sortPreReleases
      .sort(sortBy('version'))
      .reverse()
      .reduce((arr, v) => {
        // do not push pre releases of lastest stable
        if (!allLatestVersion.test(v.version)) {
          arr.push(v.version);
        }
        return arr;
      }, []);

  const versionsToDisplay = allVersionsOrdered.filter(version => {
    return !/^(\d|\.)+-(alpha|beta|rc|pre).+/.test(version);
  });

  return {
    allVersionsOrdered,
    latestStable,
    allLatestVersion,
    newestPreRelease,
    versionsToDisplay
  };
}
