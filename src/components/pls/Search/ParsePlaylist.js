const getArtistName = (trackline) => {
  return trackline.split(' - ')[0].trim();
};

const getTrack = (trackline) => {
    return trackline.split(' - ')[1].trim();
};

const explicitAlbumName = (trackline) => {
  const hasExplicitName = trackline.match(/\[([^)]+)\]/);

  if (hasExplicitName === null) {
    return hasExplicitName
  }
  const albumName = encodeURI(trackline.match(/\[([^)]+)\]/)[1].replace(/#[\d]+/, '').replace(/CD[\d]+/, '').trim());


  return albumName;
};

const albumUnique = (artist, album, albumsData) => {
  return albumsData.filter(function(item) {
    return item.artist === artist && item.album === album;
  }).length === 0;
};

const ParsePlaylist = (string) => {
  const albumsData = [];
  const tracks = string.match(/[^\r\n]+/g);

  let plsLength = tracks.length;

  for (let i = 0; i < plsLength; i++) {
    const strippedTrack =  tracks[i].replace(/^[\d.]+/, '');
    console.log(strippedTrack.split(' - '));

    if (strippedTrack.split(' - ').length == 1){
      albumsData.push({'track': tracks[i], 'error': `Wrong format of track name`});
      continue;
    }
    const artistName = getArtistName(strippedTrack);

    if (explicitAlbumName(strippedTrack) !== null) {
      let albumName = explicitAlbumName(strippedTrack);

      if (albumUnique(artistName, albumName, albumsData)){
        albumsData.push({'artist': artistName, 'album': albumName})
      }
    }
    else{
      albumsData.push({'artist': artistName, 'track': getTrack(strippedTrack)})
    }

  }
  return albumsData;

};

export default ParsePlaylist;
