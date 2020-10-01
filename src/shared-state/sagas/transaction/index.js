import {call, put} from 'redux-saga/effects';
import TransactionActions from 'shared-state/reducers/transaction';
import {apiGetTransactionList} from 'utils/Api';
import {
  capitalizeString,
  upperCaseString,
  formatRupiah,
  formatDateIndonesia,
} from 'utils/Functions';

export function* sagaGetTransactionList(action) {
  const response = yield call(apiGetTransactionList, action);

  if (response.status >= 200 && response.status < 300) {
    // Assigning new value to Transaction List Item
    const dataObjectToArray = Object.values(response.data);
    const result = dataObjectToArray.map((row) => {
      if (row.status === 'SUCCESS') {
        row.borderColor = 'green';
        row.lineColor = 'green';
        row.textColor = 'white';
        row.bgColor = 'green';
        row.statusText = 'Berhasil';
      } else {
        row.borderColor = 'orange';
        row.lineColor = 'orange';
        row.textColor = 'black';
        row.bgColor = 'white';
        row.statusText = 'Pengecekan';
      }

      row.beneficiary_bank =
        row.beneficiary_bank.length > 4
          ? capitalizeString(row.beneficiary_bank)
          : upperCaseString(row.beneficiary_bank);

      row.sender_bank =
        row.sender_bank.length > 4
          ? capitalizeString(row.sender_bank)
          : upperCaseString(row.sender_bank);

      row.amount_formatted = formatRupiah(row.amount);
      row.date_formatted = formatDateIndonesia(row.created_at);

      return row;
    });
    yield put(TransactionActions.getTransactionListSuccess(result));
  } else {
    yield put(TransactionActions.getTransactionListFailure(response));
  }
}
