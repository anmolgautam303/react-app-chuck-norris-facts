import React from 'react';

import { SaveFact } from '../../../src/utilities/SaveFacts';
import './joke.css';

const Joke = (props) => {
  if (props.joke.length !== 0) {
    return (
      <div>
        <button 
          className="btn btn-success button-star"
          onClick={() => {
            SaveFact(props.joke);
            props.updateFavouriteJokes(props.joke)
          }}
        >
          <i className="fa fa-star"></i>
        </button>
        <span>{props.joke.value}</span>
      </div>
    )
  }

  return null
}

export default Joke;
