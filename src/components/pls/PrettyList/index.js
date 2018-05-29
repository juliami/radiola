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
      console.log('inside');
      console.log(albums);

      const albumsCount = albums.length;
      console.log(albumsCount);

      for (let i = 0; i < albumsCount; i++) {
        console.log(decodeURI(albums[i].data.track));
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
