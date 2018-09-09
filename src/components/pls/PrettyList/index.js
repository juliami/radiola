'use strict';

import React from 'react';
import styles from './styles.css';

class PrettyList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const albums = this.props.albums;
    let value = '';

    if (albums) {
      const albumsCount = albums.length;

      for (let i = 0; i < albumsCount; i++) {
        value += `${i + 1}. ${decodeURI(albums[i].artist)} - ${decodeURI(albums[i].track)}\n`;
      }
    }



    return (
      <div className={styles.prettyList}>
        <label htmlFor={'sourceplaylist'} className={styles.label}>Pretty playlist:</label>
        <textarea
          id={'prettyplaylist'}
          className={styles.textarea}
          value={value}
        />
      </div>
    )
  }
}

export default PrettyList;
