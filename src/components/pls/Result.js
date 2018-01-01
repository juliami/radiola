'use strict';

import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import styles from './Result.css';


const makeRequest = (artist, album) => {
  return `https://api.deezer.com/search?q=artist:'${artist}'&album:'${album}'&output=jsonp`
};



class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cover: ''};

  }

  componentDidMount() {
    const album = this.props.album;
    fetchJsonp(makeRequest(album.artist, album.name))
      .then(function(response) {
        return response.json();
      })
      .then(
        json => {
          this.setState({cover: json.data[0].album.cover_xl});
        }
      )
      .catch(function(error) { console.log(error); });
  };


  render() {
    return (
      <li className={styles.root}>
        <img src={this.state.cover} className={styles.image}/>
      </li>

    );
  }
};

export default Result;
