'use strict';

import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import styles from './Result.css';


const makeRequest = (album) => {

  let request = `https://api.deezer.com/search?q=`;

  Object.keys(album).forEach(function (key) {
    let prop = `${key}:"${album[key]}"%20`;
    request = request.concat(prop);
    console.log(prop);
  });

  console.log('return')

  return request.concat('&output=jsonp');
};



class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cover: ''};

  }

  componentDidMount() {
    const album = this.props.album;
    console.log(makeRequest(album))
    fetchJsonp(makeRequest(album))
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
