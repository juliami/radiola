'use strict';

import React from 'react';
import Result from '../Result';
import styles from './ResultList.css';

import DownloadButton from '../DownloadButton';

class ResultList extends React.Component {
  render() {

    const results = [];
    const unduplicatedAlbums = [];

    for (let album of this.props.albums) {
      const existingDuplicate = unduplicatedAlbums.find(o => o.title === album.title);
      if (!existingDuplicate) {
        let item = album;
        item.trackList = [album.track];
        unduplicatedAlbums.push(item);
      } else{
        existingDuplicate.trackList.push(album.track)
      }
    }

    for (let album of unduplicatedAlbums) {
        results.push(<Result album={album}/>)
    }

    return (
      <div>
        <ul className={styles.list}>
          {results}
        </ul>
        {/*<DownloadButton albums={this.albums} />*/}
      </div>
    );
  }
}

export default ResultList;
