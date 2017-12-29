'use strict';

import React from 'react';
import DownloadButton from './DownloadButton';
import Result from './Result';

class ResultList extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
          <h1>See the results</h1>
          <Result cover={this.props.coverUrl} />
          <DownloadButton url={this.props.coverUrl} />
        </div>
    );
  }
}

export default ResultList;
