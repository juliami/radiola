'use strict';

import React from 'react';
import ResultList from '../ResultList';
import ParsePlaylist from './ParsePlaylist';
import styles from './Search.css';

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
    this.setState({albums: ParsePlaylist(this.state.value)});
    event.preventDefault();
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} className={styles.root}>
        <label htmlFor={"sourceplaylist"} className={styles.label}>Paste your playlist:</label>
        <textarea
          onChange={this.handleChange}
          className={styles.textarea}
          id={"sourceplaylist"}
          value={this.state.value} />
        <input type={'submit'} className={styles.button} value={"Find cover art"} />
      </form>



      <ResultList albums={this.state.albums} />
      </div>
    );
  }
}

SearchComponent.displayName = 'PlsSearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
