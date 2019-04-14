import { takeLatest } from 'redux-saga/effects'
import Api from '../services/Api'

import {
  FETCH_RANDOM_FACT,
  FETCH_ALL_CATEGORY,
  FETCH_FACT_BY_CATEGORY
} from '../constants/Facts_constants';
import { 
  getRandomFact, 
  getAllCategory, 
  getFactByCategory 
} from './FactsSaga'

const api = Api.create();

function* Saga() {
  yield takeLatest(FETCH_RANDOM_FACT, getRandomFact, api);

  yield takeLatest(FETCH_ALL_CATEGORY, getAllCategory, api);

  yield takeLatest(FETCH_FACT_BY_CATEGORY, getFactByCategory, api);
}

export default Saga;