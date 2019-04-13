import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavouriteJokesComponent from '../../components/favouriteJokes';

class FavouriteJokes extends Component {
render() {
  return (
    <FavouriteJokesComponent
      savedJokes={this.props.savedJokes}
    />
  );
  }
}

const mapStateToProps = state => {
  return {
    savedJokes: state.factReducer.savedJokes,
  }
}

export default connect(mapStateToProps, null)(FavouriteJokes)