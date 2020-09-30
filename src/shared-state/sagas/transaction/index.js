import {call, put} from 'redux-saga/effects';
import TransactionActions from 'shared-state/reducers/transaction';

export function* sagaGetTransactionList(action) {
  console.log('Tes Masuk', action);
}
