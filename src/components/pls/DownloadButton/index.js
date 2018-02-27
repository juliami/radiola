'use strict';

import React from 'react';
import styles from './DownloadButton.css';


class DownloadButton extends React.Component {

  constructor(props) {
    super(props);

  }


  albumCovers = [];

  componentDidUpdate(){
    const albumCovers = [];
    const albums = this.props.albums;
    const albumCount = albums.length;
    for (let i = 0; i < albumCount; i++) {
      albumCovers.push(albums[i].cover_xl);
    }
    this.albumCovers = albumCovers;

  }


  render() {

    const filestackUrl = 'https://process.filestackapi.com/AusOqTZRqSIyOvnRX3OU1z/zip/[' + this.albumCovers.join() + ']';

    return (
      <a className={styles.button} href={filestackUrl}>Download</a>
    );
  }
}

export default DownloadButton;
