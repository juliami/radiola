'use strict';

import React from 'react';
import Result from '../Result';
import styles from './ResultList.css';

import DownloadButton from '../DownloadButton';

class ResultList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {fetchedAlbums: []};
  // }
  //
  // results = [];
  //
  // iterateRequests = (parsedAlbums) => {
  //   const fetchedAlbums = [];
  //   for (let parsedAlbum of parsedAlbums) {
  //
  //     if (parsedAlbum.error) {
  //       fetchedAlbums.push({
  //         data: {
  //           artist: parsedAlbum.artist,
  //         },
  //         status: parsedAlbum.error,
  //       });
  //       continue;
  //     }
  //
  //    // const fetchedAlbums = this.state.fetchedAlbums;
  //
  //     const request = this.makeRequest(parsedAlbum);
  //     fetchJsonp(request)
  //       .then(function(response) {
  //
  //         return response.json();
  //       })
  //       .then(
  //         json => {
  //           let data = json.data[0].album;
  //           data.artist = parsedAlbum.data.artist;
  //           data.track = parsedAlbum.data.track;
  //           const fetchedAlbum = {
  //             data: data,
  //             status: 1
  //           };
  //
  //
  //           fetchedAlbums.push(fetchedAlbum);
  //           // this.setState({fetchedAlbums: fetchedAlbums})
  //         }
  //       )
  //       .catch(function(error) {
  //         const fetchedAlbum = {
  //           data: {
  //             artist: parsedAlbum.data.artist,
  //             album: parsedAlbum.data.title,
  //             track: parsedAlbum.data.track,
  //           },
  //           status: 'Album not found',
  //         }
  //         fetchedAlbums.push(fetchedAlbum);
  //
  //       });
  //   }
  //   console.log(fetchedAlbums);
  //   console.log("Finished loop");
  //   //this.setState({fetchedAlbums: 'test'})
  //   return fetchedAlbums;
  //
  // }
  //
  //
  //
  // objectsSame = (x, y) => {
  //   let objectsAreSame = true;
  //   for(let propertyName in x) {
  //     if(x[propertyName] !== y[propertyName]) {
  //       objectsAreSame = false;
  //       break;
  //     }
  //   }
  //   return objectsAreSame;
  // };
  //
  // makeRequest = (album) => {
  //   let request = 'https://api.deezer.com/search?q=';
  //   const data = album.data;
  //    Object.keys(data).forEach(function (key) {
  //     let prop = `${key}:"${data[key]}"`;
  //     request = request.concat(prop);
  //   });
  //
  //   return request.concat('&output=jsonp');
  // };



  render() {
  //console.log('Render ResultList');
  //   const results = [];
  //   const albums = this.iterateRequests(this.props.albums);
  //   console.log('render');
  //   console.log(albums);
  //   for (let album of albums) {
  //     console.log('aa');
  //     console.log(album);
  //     results.push(<Result album={album}/>)
  //   }
  //
  //
  //   const albumsCount = albums.length;
  //   let value = '';
  //   console.log(albumsCount);
  //   console.log(typeof albums);
  //   for (let i = 0; i < albumsCount; i++) {
  //     console.log(albums[i]);
  //   }
    const results = [];

    for (let album of this.props.albums) {
           results.push(<Result album={album}/>)
         }

    return (
      <div>
        <ul className={styles.list}>
          {results}
        </ul>
        {/*<DownloadButton albums={this.albums} />*/}
      </div>
    );
  }
}

export default ResultList;
