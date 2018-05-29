const getArtistName = (trackline) => {
  return  encodeURI(trackline.split(' - ')[0].trim());
};

const getTrack = (trackline, selector=' - ') => {
  return  encodeURI(trackline.split(selector)[1].trim());
};

const explicitAlbumName = (trackline) => {
  const albumTitlePattern = /\[([\w\W]+)\]/;
  const hasExplicitName = trackline.match(albumTitlePattern);
  if (hasExplicitName === null) {
    return hasExplicitName
  }
  const albumName = encodeURI(trackline.match(albumTitlePattern)[1].replace(/#[\d]+/, '').replace(/CD[\d]+/, '').trim());


  return albumName;
};


export const chopPlaylist = (string) => {
  const albumsData = [];
  const tracks = string.match(/[^\r\n]+/g);

  for (let track of tracks) {
    const strippedTrack =  track.replace(/^[\d.]+/, '');

    if (strippedTrack.split(' - ').length === 1){
      albumsData.push({data: {'track': track}, 'error': `Wrong format of track name`});
      continue;
    }
    const artistName = getArtistName(strippedTrack);

    if (explicitAlbumName(strippedTrack) !== null) {
      let albumName = explicitAlbumName(strippedTrack);
      albumsData.push({data: {'artist': artistName, 'album': albumName, 'track': getTrack(strippedTrack,'] ')}})
    }
    else{
      albumsData.push({data: {'artist': artistName, 'track': getTrack(strippedTrack)}})
    }
  }
  return albumsData;

};
