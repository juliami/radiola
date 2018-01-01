'use strict';

import React from 'react';
import styles from './Header.css';



const Header = () => (
  <header className={styles.root}>
    <div className={styles.container}>
    <h1 className={styles.brand}>Radiola<span className={styles.product}>Playlist</span></h1>
    </div>
  </header>
)

export default Header;
