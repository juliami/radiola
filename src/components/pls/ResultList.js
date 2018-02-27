'use strict';

import React from 'react';
import Result from './Result';
import styles from './ResultList.css';
import fetchJsonp from 'fetch-jsonp';
import DownloadButton from "./DownloadButton";

class ResultList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fetchedAlbums: []};
  };

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
        .catch(function(error) { console.log(error); });
    }

  }

  componentWillReceiveProps(nextProps) {
    this.iterateRequests(nextProps.albums);

  }

  makeRequest = (album) => {

    let request = `https://api.deezer.com/search?q=`;

    Object.keys(album).forEach(function (key) {
      let prop = `${key}:"${album[key]}"%20`;
      request = request.concat(prop);
    });

    return request.concat('&output=jsonp');
  };



  render() {

    const  results = [];
    const albums = this.state.fetchedAlbums;

    var albumsCount = albums.length;
    for (var i = 0; i < albumsCount; i++) {
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
