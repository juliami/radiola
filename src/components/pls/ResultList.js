'use strict';

import React from 'react';
import Result from './Result';
import styles from './ResultList.css';
import fetchJsonp from 'fetch-jsonp';
import DownloadButton from './DownloadButton';

class ResultList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fetchedAlbums: []};
  }

  iterateRequests = (parsedAlbums) => {

    const albumsCount = parsedAlbums.length;

    for (let i = 0; i < albumsCount; i++) {
      const fetchedAlbums = this.state.fetchedAlbums;
      const request = this.makeRequest(parsedAlbums[i]);
      fetchJsonp(request)
        .then(function(response) {

          return response.json();
        })
        .then(
          json => {
            let album = json.data[0].album;
            album.artist = parsedAlbums[i].artist;
            fetchedAlbums.push(album);
            this.setState({fetchedAlbums: fetchedAlbums})
          }
        )
        .catch(function(error) {
          console.log('nie znalezione');
          console.log(parsedAlbums[i]);
          fetchedAlbums.push({
            title: parsedAlbums[i].album,
            artist: parsedAlbums[i].artist,
          });

        });
    }

  }

  componentWillReceiveProps(nextProps) {
    if (this.objectsSame(this.props.albums, nextProps.albums)) {
    this.setState({fetchedAlbums: []});
    this.iterateRequests(nextProps.albums);
  }

  }
  objectsSame = (x, y) => {
    let objectsAreSame = true;
    for(let propertyName in x) {
      if(x[propertyName] !== y[propertyName]) {
        objectsAreSame = false;
        break;
      }
    }
    return objectsAreSame;
  };

  makeRequest = (album) => {

    let request = 'https://api.deezer.com/search?q=';

    Object.keys(album).forEach(function (key) {
      let prop = `${key}:"${album[key]}"%20`;
      request = request.concat(prop);
    });

    return request.concat('&output=jsonp');
  };



  render() {

    const  results = [];
    const albums = this.state.fetchedAlbums;

    let albumsCount = albums.length;
    for (let i = 0; i < albumsCount; i++) {
      results.push(<Result album={albums[i]}/>)
    }



    return (
      <div>
        <ul className={styles.list}>
          {results}
        </ul>
        <DownloadButton albums={albums} />
      </div>
    );
  }
}

export default ResultList;
