'use strict';

import React from 'react';
import styles from './Result.css';

class Result extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const album = this.props.album;
    return (
      <li className={styles.root}>
        <img src={album.cover_xl} className={styles.image}/>
      </li>

    );
  }
}

export default Result;
