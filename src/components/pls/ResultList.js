'use strict';

import React from 'react';
import DownloadButton from './DownloadButton';

class ResultList extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
          <h1>See the results</h1>
          <img src={this.props.coverUrl}/>
          <DownloadButton url={this.props.coverUrl} />
        </div>
    );
  }
}

export default ResultList;
