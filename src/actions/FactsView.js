import {
  FETCH_RANDOM_FACT,
  FETCH_ALL_CATEGORY,
  FETCH_FACT_BY_CATEGORY,
  UPDATE_FAVOURITE_JOKES
} from '../constants/Facts_constants';
  
export const getRandomfact = payload => {
  return {
    type: FETCH_RANDOM_FACT,
    payload: payload
  }
}

export const fetchAllCategory = payload => {
  return {
    type: FETCH_ALL_CATEGORY,
    payload: payload
  }
}

export const getFactByCategory = payload => {
  return {
    type: FETCH_FACT_BY_CATEGORY,
    payload: payload
  }
}

export const updateFavouriteJokes = payload => {
  return {
    type: UPDATE_FAVOURITE_JOKES,
    payload: payload
  }
}