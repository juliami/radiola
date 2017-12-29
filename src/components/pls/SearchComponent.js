'use strict';

import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import ResultList from './ResultList';

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

    const makeSearchTemplate = (album) => {
      return `https://api.deezer.com/search?q=album:"${album}"&output=jsonp`
    }
    const searchTemplate = makeSearchTemplate(this.state.value);


    fetchJsonp(searchTemplate)
      .then(function(response) {
        return response.json();
      })
      .then(
        json => {
          this.setState({coverUrl: json.data[0].album.cover_xl});
        }
      )
      .catch(function(error) { console.log(error); });

    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange} width={"1500"} height={"1300"}>{this.state.value}</textarea>
        <input type={"submit"}  />

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
