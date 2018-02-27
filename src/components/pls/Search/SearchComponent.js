'use strict';

import React from 'react';
import ResultList from '../ResultList';
import fetchJsonp from 'fetch-jsonp';
import SearchForm from '../SearchForm'
import DownloadButton from "../DownloadButton";

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {parsedAlbums: [], albumEntries: []};


  //  this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
  }

  addParsedAlbums = (albums) => {
    this.setState({parsedAlbums: albums});
    this.setState({albumEntries: []});
    const parsedAlbums = this.state.parsedAlbums;
    const albumsCount = parsedAlbums.length;


    for (let i = 0; i < albumsCount; i++) {
      const request = this.makeRequest(parsedAlbums[i]);
      fetchJsonp(request)
        .then(function(response) {

          return response.json();
        })
        .then(
          json => {

            let albumEntries = this.state.albumEntries;
            albumEntries.push(json.data[0].album);
            this.setState({albumEntries: albumEntries});
          }
        )
        .catch(function(error) { console.log(error); });
    }


  };



  makeRequest = (album) => {

    let request = `https://api.deezer.com/search?q=`;

    Object.keys(album).forEach(function (key) {
      let prop = `${key}:"${album[key]}"%20`;
      request = request.concat(prop);
    });

    return request.concat('&output=jsonp');
  };


  render() {
    return (
      <div>
        <SearchForm addParsedAlbums={this.addParsedAlbums} />
        <ResultList albums={this.state.albumEntries} />
        <DownloadButton albums={this.state.albumEntries} />
      </div>
    );
  }
}

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
