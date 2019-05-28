import _ from "lodash"

const isWin = ({name}) => name.endsWith('.exe');
const isMacOs = ({name}) => name.endsWith('-mac.zip') || name.endsWith('.dmg');
const isLinux = ({name}) =>
  name.endsWith('.tar.gz') ||
  name.endsWith('.rpm') ||
  name.endsWith('.deb') ||
  name.endsWith('.AppImage');


const _getDownloadCountsPerPlatform = (assets, platFormCheckerFn) =>
  assets.reduce((p, asset) => platFormCheckerFn(asset) ? p + asset.downloadCount : p, 0);

const _getDownloadStats = (releases) => {

  const desktopReleases = releases.nodes.filter(({tagName}) =>
    tagName.startsWith("desktop-") || // new tagging scheme
    tagName.endsWith("-beta.5") ||
    tagName.endsWith("-beta.6")
  );

  const versions = desktopReleases.map( r =>  r.tagName );
  const win = desktopReleases.map(r => _getDownloadCountsPerPlatform(r.releaseAssets.nodes, isWin));
  const linux = desktopReleases.map(r => _getDownloadCountsPerPlatform(r.releaseAssets.nodes, isLinux));
  const macos = desktopReleases.map(r => _getDownloadCountsPerPlatform(r.releaseAssets.nodes, isMacOs));

  const sumMacos = _.sum(macos);
  const sumWin = _.sum(win);
  const sumLinux = _.sum(linux);
  const totalDownloads = sumLinux + sumMacos + sumWin || 1;

  return {
    totalDownloads,
    versions,
    downloadCounts: {
      win,
      linux,
      macos
    },
    distribution: {
      win: sumWin / totalDownloads,
      linux: sumLinux / totalDownloads,
      macos: sumMacos / totalDownloads,
    }
  }
};

export const getDownloadStats = _.memoize(_getDownloadStats);
