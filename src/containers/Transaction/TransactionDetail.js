import React from 'react';

// Component
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import Header from 'components/Header';
import TextButton from 'components/Button/TextButton';
import Icon from 'react-native-vector-icons/Fontisto';

// Styles
import styles from './styles';

const TransactionDetail = ({route, navigation}) => {
  console.log('Route', route);
  const {item = {}} = route.params;
  const Divider = <View style={styles.divider} />;
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Detail Transaksi" />
      <View style={styles.detailView}>
        <View style={styles.rowView}>
          <Text style={styles.title}>{`ID TRANSAKSI: #${item.id}`}</Text>
          <TouchableOpacity>
            <Image
              style={styles.iconCopy}
              source={require('images/copy.png')}
            />
          </TouchableOpacity>
        </View>
        {Divider}
        <View style={{...styles.rowView, justifyContent: 'space-between'}}>
          <Text style={styles.title}>DETAIL TRANSAKSI</Text>
          <TextButton text="Tutup" onPress={() => navigation.goBack()} />
        </View>
        {Divider}
        <View style={styles.transactionView}>
          <View style={[styles.row, styles.alignCenter]}>
            <Text style={styles.bankName}>{item.sender_bank}</Text>
            <Icon style={styles.iconArrow} name="arrow-right" />
            <Text style={styles.bankName}>{item.beneficiary_bank}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.fullFlex}>
              <View style={styles.columnView}>
                <Text style={styles.title}>{item.beneficiary_name}</Text>
                <Text style={styles.desc}>{item.account_number}</Text>
              </View>
              <View style={styles.columnView}>
                <Text style={styles.title}>{item.beneficiary_name}</Text>
                <Text style={styles.desc}>{item.account_number}</Text>
              </View>
              <View style={styles.columnView}>
                <Text style={styles.title}>Berita Transfer</Text>
                <Text style={styles.desc}>{item.remark}</Text>
              </View>
            </View>
            <View style={styles.fullFlex}>
              <View style={styles.columnView}>
                <Text style={styles.title}>Nominal</Text>
                <Text style={styles.desc}>{item.amount_formatted}</Text>
              </View>
              <View style={styles.columnView}>
                <Text style={styles.title}>Kode Unik</Text>
                <Text style={styles.desc}>{item.unique_code}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
