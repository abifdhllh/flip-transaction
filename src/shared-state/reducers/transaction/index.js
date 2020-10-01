import {createReducer, createActions} from 'reduxsauce';
import {
  sortObjectByStringAscending,
  sortObjectByStringDescending,
  sortObjectByDateAscending,
  sortObjectByDateDescending,
} from 'utils/Functions';

// ========= Types & Actions ========= //
const {Types, Creators} = createActions({
  getTransactionListRequest: ['param'],
  getTransactionListSuccess: ['payload'],
  getTransactionListFailure: ['error'],

  sortTransactionList: ['sortValue'],
  filterTransactionList: ['filterValue'],
});
export const TransactionTypes = Types;
export default Creators;

// ========= Initial State ========= //
const INITIAL_STATE = {
  initialTransactionList: [],
  transactionList: [],
  loading: false,
  error: null,
};

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
  const transactionList = state.transactionList;

  let newTransactionlist = [];
  switch (sortValue) {
    case 0:
      newTransactionlist = transactionList;
      break;
    case 1:
      newTransactionlist = sortObjectByStringAscending(
        transactionList,
        'beneficiary_name',
      );
      break;
    case 2:
      newTransactionlist = sortObjectByStringDescending(
        transactionList,
        'beneficiary_name',
      );
      break;
    case 3:
      newTransactionlist = sortObjectByDateDescending(
        transactionList,
        'created_at',
      );
      break;
    case 4:
      newTransactionlist = sortObjectByDateAscending(
        transactionList,
        'created_at',
      );
      break;
    default:
      newTransactionlist = transactionList;
      break;
  }
  return {...state, transactionList: newTransactionlist};
};

const reducerFilterTransactionList = (state, {filterValue}) => {
  const transactionList = state.transactionList;
  // const filteredTransactionList = transactionList.filter(
  //   ({
  //     beneficiary_name = '',
  //     date_formatted = '',
  //     beneficiary_bank = '',
  //     sender_bank = '',
  //   }) =>
  //     beneficiary_name.toLowerCase().includes(filterValue) ||
  //     date_formatted.toLowerCase().includes(filterValue) ||
  //     beneficiary_bank.toLowerCase().includes(filterValue) ||
  //     sender_bank.toLowerCase().includes(filterValue),
  // );
  const filteredTransactionList = transactionList.filter((item) =>
    item.beneficiary_name.toLowerCase().includes(filterValue),
  );

  console.log('Filtered', filteredTransactionList);

  return {...state, transactionList: filteredTransactionList};
};
// ========= Reducers ========= //

// ========= Hook Reducer to Types ========= //
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TRANSACTION_LIST_REQUEST]: reducerGetTransactionListRequest,
  [Types.GET_TRANSACTION_LIST_SUCCESS]: reducerGetTransactionListSuccess,
  [Types.GET_TRANSACTION_LIST_FAILURE]: reducerGetTransactionListFailure,

  [Types.SORT_TRANSACTION_LIST]: reducerSortTransactionList,
  [Types.FILTER_TRANSACTION_LIST]: reducerFilterTransactionList,
});
