'use strict';

import React from 'react';
import classnames from 'classnames';
import styles from './Result.css';

class Result extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const album = this.props.album;

    const rootClass =  styles.root;
    let showCover = <img src={album.cover_xl} className={styles.image}/> ;

    if (!album.cover_xl) {
      const googleImageSearchUrl = `https://google.com/search?q=${decodeURI(album.artist)}%20${decodeURI(album.title)}&tbm=isch`;

      showCover =
        <div className={styles.coverNotFound}>
          No cover in Deezer DB.
         <a target="_blank" href={googleImageSearchUrl}>Search Google &raquo;</a>
        </div>
    }

    let tracks = [];

    for (let key in (album.trackList)){
      tracks.push(<li>{decodeURI(album.trackList[key])} </li>);
    }

    return (
      <li className={rootClass}>
        { showCover }
        <div className={styles.albumDetails}>
          <div>Artist: {decodeURI(album.artist)}</div>
          <div>Album: {decodeURI(album.title)}</div>
          <ul>{tracks}</ul>
        </div>
      </li>

    );
  }
}

export default Result;
