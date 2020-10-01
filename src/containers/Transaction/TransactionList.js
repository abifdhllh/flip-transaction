import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

// Component
import {SafeAreaView, View, FlatList, Modal, Text} from 'react-native';
import Header from 'components/Header';
import SearchBar from 'components/Form/SearchBar';
import TransactionCard from 'components/Card/TransactionCard';
import RadioButton from 'components/Button/RadioButton';
import LoadingView from 'components/View/LoadingView';

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
  loading,

  // Navigation Props
  navigation,
}) => {
  const [modalSort, setModalSort] = useState(false); // Show Modal Sort State
  const [sortValue, setSortValue] = useState(0); // Value for Sort State
  const [filterValue, setFilterValue] = useState(''); // Value for Filter State

  const sortText = sortOptions[sortValue].label; // Text to display on Sort Text Indicator

  // Get the Transaction List via API call
  useEffect(() => {
    doGetTransactionList();
  }, []);

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
        {loading ? (
          <LoadingView />
        ) : (
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            data={transactionList}
            keyExtractor={(item, index) => `list-item-${index}`}
            renderItem={({item}) => (
              <TransactionCard
                items={item}
                onPress={() => navigation.push('TransactionDetail', {item})}
              />
            )}
            refreshing={loading}
            onRefresh={() => doGetTransactionList()}
            ListEmptyComponent={
              <View style={styles.flexCenter}>
                <Text style={styles.emptyItemText}>Data tidak tersedia</Text>
              </View>
            }
          />
        )}
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
  loading: TransactionSelectors.getLoading(state),
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
