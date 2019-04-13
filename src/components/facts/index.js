import React from "react";

import Joke from '../joke';
import FavouriteJokesContainer from '../../containers/favouriteJokes';
import './facts.css';

const Facts = (props) => {
  return (
    <div className="factsContainer">
      <div className="buttons-container">
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => props.getRandomfact()}
        >
          Fetch Random Fact
        </button>
      </div>
      <Joke
        joke={props.randomFact}
        updateFavouriteJokes={props.updateFavouriteJokes}
      />
      <FavouriteJokesContainer />
    </div>
  );
}

export default Facts;
