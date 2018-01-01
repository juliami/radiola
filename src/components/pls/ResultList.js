'use strict';

import React from 'react';
import DownloadButton from './DownloadButton';
import Result from './Result';

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
          <h1>See the results</h1>
          {results}
          <DownloadButton url={this.props.coverUrl} />
        </div>
    );
  }
}

export default ResultList;
