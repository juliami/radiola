'use strict';

import React from 'react';
import ResultList from '../ResultList';

import SearchForm from '../SearchForm'

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {parsedAlbums: []};

  }

  addParsedAlbums = (albums) => {
    this.setState({
      parsedAlbums: albums,
    })
  };


  render() {


    return (
      <div>
        <SearchForm addParsedAlbums={this.addParsedAlbums} />
        <ResultList albums={this.state.parsedAlbums} />
      </div>
    );
  }
}

export default SearchComponent;
