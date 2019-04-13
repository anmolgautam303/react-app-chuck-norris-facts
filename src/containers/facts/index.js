import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getRandomfact,
  updateFavouriteJokes
} from '../../actions/FactsView';
import FactsComponent from '../../components/facts';

class Facts extends Component {
render() {
  return (
    <FactsComponent
      randomFact={this.props.randomFact}
      getRandomfact={this.props.getRandomfact}
      updateFavouriteJokes={this.props.updateFavouriteJokes}
    />
  );
  }
}

const mapStateToProps = state => {
  return {
    randomFact: state.factReducer.randomFact
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRandomfact: () => { dispatch(getRandomfact()) },
    updateFavouriteJokes: (joke) => { dispatch(updateFavouriteJokes(joke)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts)