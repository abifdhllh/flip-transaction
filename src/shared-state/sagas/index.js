import {takeLatest, all} from 'redux-saga/effects';

// Types
import {TransactionTypes} from 'shared-state/reducers/transaction';

// Sagas
import {sagaGetTransactionList} from 'shared-state/sagas/transaction';

// Connect Types to Sagas
export default function* rootSagas() {
  yield all([
    takeLatest(TransactionTypes.GET_TRANSACTION_LIST_REQUEST, sagaGetTransactionList)
  ])
}