import {combineReducers} from 'redux';

// Reducer List
import {reducer as transaction} from './transaction';

const rootReducer = combineReducers({
  transaction,
});

export default rootReducer;
