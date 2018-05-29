require('normalize.css/normalize.css');
require('styles/App.css');
require('es6-promise').polyfill();

import React from 'react';
import SearchComponent from './pls/Search/SearchComponent';
import Header from './pls/Header/Header';
import styles from './main.css';
import { createStore } from 'redux'
import { parsePlaylist } from '../redux/reducers';
import { Provider, connect } from 'react-redux'





const store = createStore(
  parsePlaylist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
      <div>

        <Header />
        <div className={styles.container}>
          <SearchComponent/>
        </div>
      </div>
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
