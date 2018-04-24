'use strict';

import React from 'react';
import ResultList from '../ResultList/ResultList';
import PrettyList from '../PrettyList';
import SearchForm from '../SearchForm'

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {parsedAlbums: []};

  }

  addParsedAlbums = (albums) => {
    this.setState({
      parsedAlbums: albums
    })
  };


  render() {
    return (
      <div>
        <SearchForm addParsedAlbums={this.addParsedAlbums} />
        <PrettyList albums={this.state.parsedAlbums}/>
        <ResultList albums={this.state.parsedAlbums} />
      </div>
    );
  }
}

export default SearchComponent;
