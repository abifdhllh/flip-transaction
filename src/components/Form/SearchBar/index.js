import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import TextButton from 'components/Button/TextButton';
import styles from './style';

const SearchBar = ({
  onChangeText,
  placeholder = 'Cari nama, bank, atau nominal',
  onPressSort,
  containerStyle = {},
  sortText = 'URUTKAN',
  value = '',
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <Icon style={styles.icon} name="magnifier" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
      />
      <TextButton text={sortText} iconName="down" onPress={onPressSort} />
    </View>
  );
};

export default SearchBar;
