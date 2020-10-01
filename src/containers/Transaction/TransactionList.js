import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

// Component
import {SafeAreaView, View, FlatList, Modal} from 'react-native';
import Header from 'components/Header';
import SearchBar from 'components/Form/SearchBar';
import TransactionCard from 'components/Card/TransactionCard';
import RadioButton from 'components/Button/RadioButton';

// Styles
import styles from './styles';

// Action & Selector
import TransactionActions, {
  TransactionSelectors,
} from 'shared-state/reducers/transaction';

const sortOptions = [
  {
    label: 'URUTKAN',
    value: 0,
  },
  {
    label: 'Nama A-Z',
    value: 1,
  },
  {
    label: 'Nama Z-A',
    value: 2,
  },
  {
    label: 'Tanggal Terbaru',
    value: 3,
  },
  {
    label: 'Tanggal Terlama',
    value: 4,
  },
];

const TransactionList = ({
  // Action
  doGetTransactionList,
  doSortTransactionList,
  doFilterTransactionList,

  // Selector
  transactionList,

  // Navigation Props
  navigation,
}) => {
  const [modalSort, setModalSort] = useState(false);
  const [sortValue, setSortValue] = useState(0);
  const [filterValue, setFilterValue] = useState('');

  const sortText = sortOptions[sortValue].label;

  useEffect(() => {
    doGetTransactionList();
  }, []);

  console.log('Filter Value', filterValue);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Catatan Transaksi" />
      <View style={styles.body}>
        <SearchBar
          onPressSort={() => setModalSort(true)}
          sortText={sortText}
          value={filterValue}
          onChangeText={(filterValue) => {
            setFilterValue(filterValue);
            doFilterTransactionList(filterValue);
          }}
        />
        <FlatList
          data={transactionList}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={({item}) => (
            <TransactionCard
              items={item}
              onPress={() => navigation.push('TransactionDetail', {item})}
            />
          )}
        />
      </View>
      <Modal
        onRequestClose={() => setModalSort(false)}
        hardwareAccelerated
        transparent
        animationType="fade"
        visible={modalSort}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <RadioButton
              options={sortOptions}
              onPress={(value) => {
                setSortValue(value);
                setModalSort(false);
                doSortTransactionList(value);
              }}
              selected={sortValue}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  transactionList: TransactionSelectors.getTransactionList(state),
});

const mapDispatchToProps = (dispatch) => ({
  doGetTransactionList: (e) =>
    dispatch(TransactionActions.getTransactionListRequest(e)),
  doSortTransactionList: (e) =>
    dispatch(TransactionActions.sortTransactionList(e)),
  doFilterTransactionList: (e) =>
    dispatch(TransactionActions.filterTransactionList(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
