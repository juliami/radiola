'use strict';

import React from 'react';
import ResultList from '../ResultList';
import ParsePlaylist from './ParsePlaylist';

require('styles/pls/Search.css');


class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', albums: []};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const albums = ParsePlaylist(this.state.value);

    this.setState({albums: ParsePlaylist(this.state.value)});

    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange} width={'1500'} height={'1300'}>{this.state.value}</textarea>
        <input type={'submit'}  />

        <ResultList albums={this.state.albums} />
      </form>
    );
  }
}

SearchComponent.displayName = 'PlsSearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
