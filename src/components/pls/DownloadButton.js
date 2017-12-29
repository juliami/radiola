'use strict';

import React from 'react';

class DownloadButton extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <a href={this.props.url} download>Download</a>
    );
  }
}

export default DownloadButton;
