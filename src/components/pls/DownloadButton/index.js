'use strict';

import React from 'react';
import styles from './DownloadButton.css';


class DownloadButton extends React.Component {

  constructor(props) {
    super(props);

  }



  componentWillMount(){
    console.log(this.albums);
  }


  render() {

    const filestackUrl = 'https://process.filestackapi.com/AusOqTZRqSIyOvnRX3OU1z/zip/[https://e-cdns-images.dzcdn.net/images/cover/03eed153711ec9a910804e6593de7b13/1000x1000-000000-80-0-0.jpg, https://e-cdns-images.dzcdn.net/images/cover/99f2f38a64c4ce5835c5bb9783469a02/1000x1000-000000-80-0-0.jpg]';

    return (
      <a className={styles.button} href={filestackUrl}>Download</a>
    );
  }
}

export default DownloadButton;
