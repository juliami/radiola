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
    // console.log(album);
    const rootClass =  styles.root;
   //  const errorMsg = errored && <div className={styles.errorMsg}>{album.status}</div>;
    return (
      <li className={rootClass}>
        <img src={album.cover_xl} className={styles.image}/>
        <div className={styles.albumDetails}>
          <div>Artist: {decodeURI(album.artist)}</div>
          <div>Album: {decodeURI(album.title)}</div>
          <div>Track: {decodeURI(album.track)}</div>
        </div>
      </li>

    );
  }
}

export default Result;
