'use strict';

import React from 'react';
import styles from './styles.css';
import ParsePlaylist from '../Search/ParsePlaylist';


class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const parsedAlbums = ParsePlaylist(this.state.value)
    this.props.addParsedAlbums(parsedAlbums);
    event.preventDefault();
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <form className={styles.root} onSubmit={this.handleSubmit}>
        <label htmlFor={'sourceplaylist'} className={styles.label}>Paste your playlist:</label>
        <textarea
          onChange={this.handleChange}
          className={styles.textarea}
          id={'sourceplaylist'}
           />
        <input type={'submit'} className={styles.button} value={'Find cover art'} />
      </form>
    )
  }
}

export default SearchForm;
