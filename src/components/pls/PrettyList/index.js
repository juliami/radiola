'use strict';

import React from 'react';
import styles from './styles.css';

class PrettyList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {

    const albums = this.props.albums;
    let value = '';

    if (albums) {
      console.log('inside');
      const albumsCount = albums.length;

      for (let i = 0; i < albumsCount; i++) {
        value += `${i + 1}. ${decodeURI(albums[i].data.artist)} - ${decodeURI(albums[i].data.track)}\n`;
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
