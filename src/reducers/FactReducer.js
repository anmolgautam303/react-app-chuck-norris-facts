import ls from 'local-storage';
import { 
  SET_RANDOM_FACT, 
  SET_ALL_CATEGORY, 
  SET_FACT_BY_CATEGORY,
  UPDATE_FAVOURITE_JOKES
} from '../constants/Facts_constants';

const initialState = {
  randomFact: [],
  categories: [],
  factByCategory: [],
  savedJokes: JSON.parse(ls.get('favoriteFacts')) || []
};

const FactReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_RANDOM_FACT:
      return {
        ...state,
        randomFact: action.payload
      };
    case SET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };
    case SET_FACT_BY_CATEGORY:
      return {
        ...state,
        factByCategory: action.payload
      };
    case UPDATE_FAVOURITE_JOKES:
      return {
        ...state,
        savedJokes: JSON.parse(ls.get('favoriteFacts')) || []
      };
    default:
      return state;
  }
}

export default FactReducer;