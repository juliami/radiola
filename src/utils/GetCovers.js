import { chopPlaylist } from "./ParsePlaylist";
import fetchJsonp from 'fetch-jsonp';


const makeRequest = (album) => {
  let request = 'https://api.deezer.com/search?q=';
  const data = album.data;
  Object.keys(data).forEach(function (key) {
    let prop = `${key}:"${data[key]}"`;
    request = request.concat(prop);
  });
  console.log(request);
  return request.concat('&output=jsonp');
};

const processRequest = parsedAlbum => {

  const request = makeRequest(parsedAlbum);

  fetchJsonp(request)
    .then(function(response) {
      console.log('wait');
      return response.json();
    })
    .then(
      json => {
        console.log('jest');
        let data = json.data[0].album;
        data.artist = parsedAlbum.data.artist;
        data.track = parsedAlbum.data.track;
        return {
          data: data,
          status: 1
        };


      //  fetchedAlbums.push(fetchedAlbum);
        // this.setState({fetchedAlbums: fetchedAlbums})
      }
    )
    .catch(function(error) {
      return {
        data: {
          artist: parsedAlbum.data.artist,
          album: parsedAlbum.data.album,
          track: parsedAlbum.data.track,
        },
        status: 'Album not found',
      }
   //   fetchedAlbums.push(fetchedAlbum);

    });
}


function getFullDetails(arr) {
  return arr.reduce(function(promise, album) {
    return promise.then(function() {
      return processRequest(album);
    });
  }, Promise.resolve());
}


const getCovers  = string => {

  // Album array
  const albums = chopPlaylist(string);


  return getFullDetails(albums);
};




export default getCovers;
