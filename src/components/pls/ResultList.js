'use strict';

import React from 'react';
import Result from './Result';
import styles from './ResultList.css';

class ResultList extends React.Component {

  constructor(props) {
    super(props);
  };


  render() {

    const  results = [];
    const albums = this.props.albums;

    var albumsCount = albums.length;
    for (var i = 0; i < albumsCount; i++) {
      results.push(<Result album={albums[i]}/>)
    }

    return (
          <ul className={styles.list}>
            {results}
          </ul>
    );
  }
}

export default ResultList;
