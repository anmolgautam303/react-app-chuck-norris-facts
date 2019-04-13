import { call, put } from 'redux-saga/effects';
import { SET_RANDOM_FACT, 
    SET_ALL_CATEGORY, 
    SET_FACT_BY_CATEGORY 
} from '../constants/Facts_constants';

export function* getRandomFact(api) {
    try {
        const response = yield call(api.fetchRandomFact)
        if(response.ok) {
          yield put({ type: SET_RANDOM_FACT, payload: response.data });
        } else {
            console.log('error happened');
        }
    } catch (error) {
        console.log('error happened', error);
    }
}

export function* getAllCategory(api) {
    try {
        const response = yield call(api.fetchAllCategory)
        if(response.ok) {
          yield put({ type: SET_ALL_CATEGORY, payload: response.data });
        } else {
            console.log('error happened');
        }
    } catch (error) {
        console.log('error happened', error);
    }
}

export function* getFactByCategory(api, action) {
    console.log('check actions here:', action);

    try {
        const response = yield call(api.fetchFactByCategory, action.payload)
        if(response.ok) {
          yield put({ type: SET_FACT_BY_CATEGORY, payload: response.data });
        } else {
            console.log('error happened');
        }
    } catch (error) {
        console.log('error happened', error);
    }
}