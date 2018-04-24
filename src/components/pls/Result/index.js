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
    const errored = album.status != 1;
    const rootClass =  errored ? classnames(styles.root, styles.rootErrored) : styles.root;
    const errorMsg = errored && <div className={styles.errorMsg}>{album.status}</div>;
    return (
      <li className={rootClass}>
        <img src={album.data.cover_xl} className={styles.image}/>
        <div className={styles.albumDetails}>
          <div>Artist: {decodeURI(album.data.artist)}</div>
          <div>Album: {decodeURI(album.data.title)}</div>
          <div>Track: {decodeURI(album.data.track)}</div>
        {errorMsg}
        </div>
      </li>

    );
  }
}

export default Result;
