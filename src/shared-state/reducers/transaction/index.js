import {createReducer, createActions} from 'reduxsauce';

// ========= Types & Actions ========= //
const {Types, Creators} = createActions({
  getTransactionListRequest: ['param'],
  getTransactionListSuccess: ['payload'],
  getTransactionListFailure: ['error'],
});
export const TransactionTypes = Types;
export default Creators;

// ========= Initial State ========= //
const INITIAL_STATE = {
  transactionList: [],
  loading: false,
  error: null,
};

// ========= Selectors ========= //
export const TransactionSelectors = {
  getTransactionList: (state) => state.transaction.transactionList,
  getLoading: (state) => state.transaction.transactionList,
};

// ========= Reducers ========= //
const reducerGetTransactionListRequest = (state, {param}) => {
  return {...state, loading: true, transactionList: []};
};
const reducerGetTransactionListSuccess = (state, {payload}) => {
  return {...state, loading: false, transactionList: payload};
};
const reducerGetTransactionListFailure = (state, {error}) => {
  return {...state, loading: false, error};
};
// ========= Reducers ========= //

// ========= Hook Reducer to Types ========= //
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TRANSACTION_LIST_REQUEST]: reducerGetTransactionListRequest,
  [Types.GET_TRANSACTION_LIST_SUCCESS]: reducerGetTransactionListSuccess,
  [Types.GET_TRANSACTION_LIST_FAILURE]: reducerGetTransactionListFailure,
});
