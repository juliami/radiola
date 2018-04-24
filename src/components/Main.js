require('normalize.css/normalize.css');
require('styles/App.css');
require('es6-promise').polyfill();

import React from 'react';
import SearchComponent from './pls/Search/SearchComponent';
import Header from './pls/Header/Header';
import styles from './main.css';


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <SearchComponent/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
