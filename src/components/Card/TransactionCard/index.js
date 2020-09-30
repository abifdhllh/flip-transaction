import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './style';
import {Colors} from 'utils/Theme';

const TransactionCard = ({items = {}, onPress}) => {
  const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  const Divider = View;
  return (
    <>
      <Touchable style={styles.touchable} onPress={onPress}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.lineView,
              backgroundColor: Colors[items.lineColor],
            }}
          />
          <View style={styles.body}>
            {/* Transaction  */}
            <View style={styles.fullFlex}>
              <View style={styles.row}>
                <Text style={styles.title}>{items.sender_bank}</Text>
                <Icon style={styles.iconArrow} name="arrow-right" />
                <Text style={styles.title}>{items.beneficiary_bank}</Text>
              </View>
              <Text style={styles.desc}>{items.beneficiary_name}</Text>
              <View style={styles.row}>
                <Text style={styles.desc}>{items.amount_formatted}</Text>
                <Icon style={styles.iconDot} name="record" />
                <Text style={styles.desc}>{items.date_formatted}</Text>
              </View>
            </View>

            {/* Status */}
            <View
              style={{
                ...styles.statusView,
                backgroundColor: Colors[items.bgColor],
                borderColor: Colors[items.borderColor],
              }}>
              <Text
                style={{...styles.statusText, color: Colors[items.textColor]}}>
                {items.statusText}
              </Text>
            </View>
          </View>
        </View>
      </Touchable>
      <Divider style={styles.divider} />
    </>
  );
};

export default TransactionCard;
