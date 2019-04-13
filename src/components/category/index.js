import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Joke from '../joke';
import FavouriteJokesContainer from '../../containers/favouriteJokes';
import './category.css';

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "Select a category"
    };
  }

  componentDidMount() {
    if(this.props.categories.length === 0) {
      this.props.fetchAllCategory()
    }
  }

  handleChange = event => {
    this.setState({selectedCategory: event.target.value});
  };

  render() {
    return (
      <div className="categoryContainer">
        <div className="select-container">

          <DropdownButton
            variant="light"
            onSelect={(val) => {this.setState({ selectedCategory: val }) }}
            id="dropdown-basic-button" title={this.state.selectedCategory}
          >
            {
              this.props.categories.map((item, i) => {
                return <Dropdown.Item key={i} eventKey={item}>{item}</Dropdown.Item>
              })
            }
          </DropdownButton>
        </div>
        <div className="buttons-container">
          <button
            disabled={this.state.selectedCategory === 'Select a category' }
            type="button" 
            className="btn btn-primary"
            onClick={() => {
              this.props.getFactByCategory(this.state.selectedCategory);
            }}
          >
            Fetch Fact
          </button>
        </div>
        <Joke
          joke={this.props.factByCategory}
          updateFavouriteJokes={this.props.updateFavouriteJokes}
        />
        <FavouriteJokesContainer />
      </div>
    );
  }
}

export default Facts;
