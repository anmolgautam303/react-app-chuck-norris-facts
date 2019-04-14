import { takeLatest } from 'redux-saga/effects'
import Api from '../../services/Api';

import Saga from '../../saga';
import {
  FETCH_RANDOM_FACT,
  FETCH_ALL_CATEGORY,
  FETCH_FACT_BY_CATEGORY
} from '../../constants/Facts_constants';
import { 
  getRandomFact, 
  getAllCategory, 
  getFactByCategory 
} from '../../saga/FactsSaga';

const api = Api.create();

it('Saga', () => {
    const generator = Saga();
    expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(
      takeLatest(FETCH_RANDOM_FACT, getRandomFact, api),
    ));

    expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(
      takeLatest(FETCH_ALL_CATEGORY, getAllCategory, api),
    ));

    expect(JSON.stringify(generator.next().value)).toEqual(JSON.stringify(
      takeLatest(FETCH_FACT_BY_CATEGORY, getFactByCategory, api),
    ));
});