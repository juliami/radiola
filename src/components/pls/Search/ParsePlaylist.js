const getArtistName = (trackline) => {
  return trackline.split(' - ')[0].trim();
};

const explicitAlbumName = (trackline) => {
  const hasExplicitName = trackline.match(/\[([^)]+)\]/);

  if (hasExplicitName === null) {
    return hasExplicitName
  }
  const albumName = trackline.match(/\[([^)]+)\]/)[1].replace(/#[\d]+/, '').trim();

  return albumName;
};

const ParsePlaylist = (string) => {
  const albumsData = [];
  const tracks = string.match(/[^\r\n]+/g);

  var plsLength = tracks.length;
  for (var i = 0; i < plsLength; i++) {
    const strippedTrack =  tracks[i].replace(/^[\d.]+/, '');
    albumsData.push({'artist': getArtistName(strippedTrack), 'name': explicitAlbumName(strippedTrack)})
  }

  return albumsData;

};

export default ParsePlaylist;
