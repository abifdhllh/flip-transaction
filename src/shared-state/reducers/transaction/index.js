import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
  sortObjectByStringAscending,
  sortObjectByStringDescending,
  sortObjectByDateAscending,
  sortObjectByDateDescending,
} from 'utils/Functions';

// ========= Types & Actions ========= //
const {Types, Creators} = createActions({
  // Get Transaction List Action
  getTransactionListRequest: ['param'],
  getTransactionListSuccess: ['payload'],
  getTransactionListFailure: ['error'],

  // Sort & Filter Action
  sortTransactionList: ['sortValue'],
  filterTransactionList: ['filterValue'],
});
export const TransactionTypes = Types;
export default Creators;

// ========= Initial State ========= //
const INITIAL_STATE = Immutable({
  initialTransactionList: [],
  transactionList: [],
  loading: false,
  error: null,
});

// ========= Selectors ========= //
export const TransactionSelectors = {
  getTransactionList: (state) => state.transaction.transactionList,
  getLoading: (state) => state.transaction.loading,
};

// ========= Reducers ========= //
const reducerGetTransactionListRequest = (state, {param}) => {
  return {
    ...state,
    loading: true,
    transactionList: [],
    initialTransactionList: [],
  };
};
const reducerGetTransactionListSuccess = (state, {payload}) => {
  return {
    ...state,
    loading: false,
    transactionList: payload,
    initialTransactionList: payload,
  };
};
const reducerGetTransactionListFailure = (state, {error}) => {
  return {...state, loading: false, error};
};

const reducerSortTransactionList = (state, {sortValue}) => {
  const initialTransactionList = state.initialTransactionList;

  let newTransactionlist = [];
  switch (sortValue) {
    case 0:
      newTransactionlist = initialTransactionList;
      break;
    case 1:
      newTransactionlist = sortObjectByStringAscending(
        initialTransactionList,
        'beneficiary_name',
      );
      break;
    case 2:
      newTransactionlist = sortObjectByStringDescending(
        initialTransactionList,
        'beneficiary_name',
      );
      break;
    case 3:
      newTransactionlist = sortObjectByDateDescending(
        initialTransactionList,
        'created_at',
      );
      break;
    case 4:
      newTransactionlist = sortObjectByDateAscending(
        initialTransactionList,
        'created_at',
      );
      break;
    default:
      newTransactionlist = initialTransactionList;
      break;
  }
  return {...state, transactionList: newTransactionlist};
};

const reducerFilterTransactionList = (state, {filterValue = ''}) => {
  const initialTransactionList = state.initialTransactionList;
  const filteredTransactionList = initialTransactionList.filter(
    ({
      beneficiary_name = '',
      beneficiary_bank = '',
      sender_bank = '',
      amount = 0,
    }) =>
      beneficiary_name.toLowerCase().includes(filterValue.toLowerCase()) ||
      amount.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
      beneficiary_bank.toLowerCase().includes(filterValue.toLowerCase()) ||
      sender_bank.toLowerCase().includes(filterValue.toLowerCase()),
  );

  return {...state, transactionList: filteredTransactionList};
};
// ========= Reducers ========= //

// ========= Hook Reducer to Types ========= //
export const reducer = createReducer(INITIAL_STATE, {
  // Get Transaction List Reducer
  [Types.GET_TRANSACTION_LIST_REQUEST]: reducerGetTransactionListRequest,
  [Types.GET_TRANSACTION_LIST_SUCCESS]: reducerGetTransactionListSuccess,
  [Types.GET_TRANSACTION_LIST_FAILURE]: reducerGetTransactionListFailure,

  // Sort & Filter Reducer
  [Types.SORT_TRANSACTION_LIST]: reducerSortTransactionList,
  [Types.FILTER_TRANSACTION_LIST]: reducerFilterTransactionList,
});
