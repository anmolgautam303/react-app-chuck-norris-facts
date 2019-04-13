import React from "react";

import './favouriteJokes.css';

const FavouriteJokes = (props) => {
    const { savedJokes }= props;

    if(savedJokes.length > 0) {
      return (
        <div className="container">
          <h4>Favourite jokes:</h4>
          <ul>
            {
              savedJokes.map((item) => {
                return(
                  <li key={item.id}>{item.value}</li>
                );
              })
            }
          </ul>
        </div>
      );
    }

    return null;
}

export default FavouriteJokes;
