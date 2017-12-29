'use strict';

import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import ResultList from '../ResultList';
import ParsePlaylist from './ParsePlaylist';

require('styles/pls/Search.css');


class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', coverUrl: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const albums = ParsePlaylist(this.state.value);
    const albumsCount = albums.length;

    const makeRequest = (artist, album) => {
      return `https://api.deezer.com/search?q=artist:'${artist}'&album:'${album}'&output=jsonp`
    }


    for (var i = 0; i < albumsCount; i++) {
      let album = albums[i];
      fetchJsonp(makeRequest(album.artist, album.name))
        .then(function(response) {
          return response.json();
        })
        .then(
          json => {
            console.log(json.data[0].album.cover_xl);
            this.setState({coverUrl: json.data[0].album.cover_xl});
          }
        )
        .catch(function(error) { console.log(error); });

    }






    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange} width={'1500'} height={'1300'}>{this.state.value}</textarea>
        <input type={'submit'}  />

        <ResultList coverUrl={this.state.coverUrl}/>
      </form>
    );
  }
}

SearchComponent.displayName = 'PlsSearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
