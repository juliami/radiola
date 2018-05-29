'use strict';

import React, {Component} from 'react';
import styles from './styles.css';
import ParsePlaylist from '../Search/ParsePlaylist';
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { parsePlaylist } from '../../../redux/actions'

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  searchAlbums = (e) => {
    e.preventDefault();
    this.props.onParsePlaylist(this.state.value);
  }

  render() {

    return (
      <form className={styles.root} onSubmit={this.searchAlbums}>
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



// Map Redux state to component props
const mapStateToProps = (state) => ({
  albums: state.albums,
});

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onParsePlaylist: (content) => dispatch(parsePlaylist(content))
  }
}

// Connected Component
export default SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
