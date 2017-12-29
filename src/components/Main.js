require('normalize.css/normalize.css');
require('styles/App.css');
require('es6-promise').polyfill();

import React from 'react';
import SearchComponent from './pls/SearchComponent';


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index">
        <SearchComponent/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
