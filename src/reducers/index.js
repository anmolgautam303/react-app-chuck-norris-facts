import factReducer from './FactReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	factReducer,
});

export default rootReducer;