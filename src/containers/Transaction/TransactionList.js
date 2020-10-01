import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

// Component
import {SafeAreaView, View, FlatList} from 'react-native';
import Header from 'components/Header';
import SearchBar from 'components/Form/SearchBar';
import TransactionCard from 'components/Card/TransactionCard';

// Styles
import styles from './styles';

// Action & Selector
import TransactionActions, {
  TransactionSelectors,
} from 'shared-state/reducers/transaction';

const TransactionList = ({
  // Action
  doGetTransactionList,

  // Selector
  transactionList,

  // Navigation Props
  navigation,
}) => {
  useEffect(() => {
    doGetTransactionList();
  }, []);

  console.log('Transaction', transactionList);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Catatan Transaksi" />
      <View style={styles.body}>
        <SearchBar onPressSort={() => console.log('Masuk gan')} />
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
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  transactionList: TransactionSelectors.getTransactionList(state),
});

const mapDispatchToProps = (dispatch) => ({
  doGetTransactionList: (e) =>
    dispatch(TransactionActions.getTransactionListRequest(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
