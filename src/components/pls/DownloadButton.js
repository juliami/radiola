'use strict';

import React from 'react';
import styles from './DownloadButton.css';

class DownloadButton extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    console.log(this.props.albums);
    return (
      <a className={styles.button} href="" download>Download</a>
    );
  }
}

export default DownloadButton;
