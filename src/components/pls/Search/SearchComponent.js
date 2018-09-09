'use strict';

import React from 'react';

import Index from '../ResultList';
import PrettyList from '../PrettyList';
import SearchForm from '../SearchForm'
import {connect} from 'react-redux';
import {itemsFetchData} from '../../../redux/actions';


class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <SearchForm onParsePlaylist={this.props.onParsePlaylist}/>
        <PrettyList albums={this.props.albums} />
        <Index albums={this.props.albums} />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    albums: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onParsePlaylist: (content) => dispatch(itemsFetchData(content))
  };
};


// Connected Component
export default SearchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)

