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
    const rootClass = album.error ? classnames(styles.root, styles.rootErrored) : styles.root;
    const errorMsg = album.error && <div className={styles.errorMsg}>{album.error}</div>;
    return (
      <li className={rootClass}>
        <img src={album.cover_xl} className={styles.image}/>
        <div className={styles.albumDetails}>{album.artist} - {decodeURI(album.title)}</div>
        {errorMsg}
      </li>

    );
  }
}

export default Result;
