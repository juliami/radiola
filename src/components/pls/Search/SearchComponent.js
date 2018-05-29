'use strict';

import React from 'react';
import ResultList from '../ResultList/ResultList';
import PrettyList from '../PrettyList';
import SearchForm from '../SearchForm'
import {connect} from "react-redux";
import {parsePlaylist} from "../../../redux/actions";


class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <SearchForm onParsePlaylist={this.props.onParsePlaylist}/>
        <PrettyList albums={this.props.albums} />
        {/*<ResultList />*/}
      </div>
    );
  }
}


// Map Redux state to component props
const mapStateToProps = (state) => ({
  albums: state.albums,
});

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onParsePlaylist: (content) => dispatch(parsePlaylist(content))
  }
}

// Connected Component
export default SearchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)

