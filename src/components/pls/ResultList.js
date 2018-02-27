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
            fetchedAlbums.push(json.data[0].album);
            this.setState({fetchedAlbums: fetchedAlbums})
          }
        )
        .catch(function(error) {});
    }

  }

  componentWillReceiveProps(nextProps) {
    if (this.objectsSame(this.props.albums, nextProps.albums)) {
    this.setState({fetchedAlbums: []});
    this.iterateRequests(nextProps.albums);
  }

  }
  objectsSame = (x, y) => {
    var objectsAreSame = true;
    for(var propertyName in x) {
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
