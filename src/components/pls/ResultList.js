'use strict';

import React from 'react';
import DownloadButton from './DownloadButton';
import Result from './Result';
import styles from './ResultList.css';




class ResultList extends React.Component {

  constructor(props) {
    super(props);
  };


  render() {

    const  results = [];

    var albumsCount = this.props.albums.length;
    for (var i = 0; i < albumsCount; i++) {
      results.push(<Result album={this.props.albums[i]}/>)
    }

    return (
        <div>
          <ul className={styles.list}>
          {results}
          </ul>
          <DownloadButton ablums={this.props.albums} />
        </div>
    );
  }
}

export default ResultList;
