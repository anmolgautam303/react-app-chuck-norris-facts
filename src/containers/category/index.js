import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getFactByCategory,
  fetchAllCategory,
  updateFavouriteJokes
} from '../../actions/FactsView';
import CategoryComponent from '../../components/category';

class Facts extends Component {
render() {
  return (
    <CategoryComponent
      factByCategory={this.props.factByCategory}
      categories={this.props.categories}
      getFactByCategory={this.props.getFactByCategory}
      fetchAllCategory={this.props.fetchAllCategory}
      updateFavouriteJokes={this.props.updateFavouriteJokes}
    />
  );
  }
}

const mapStateToProps = state => {
  return {
    factByCategory: state.factReducer.factByCategory,
    categories: state.factReducer.categories,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCategory: () => { dispatch(fetchAllCategory()) },
    getFactByCategory: (category) => { dispatch(getFactByCategory(category)) },
    updateFavouriteJokes: (joke) => { dispatch(updateFavouriteJokes(joke)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts)