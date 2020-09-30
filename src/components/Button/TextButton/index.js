import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';

const TextButton = ({
  containerStyle = {},
  text,
  textStyle = {},
  iconName,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...containerStyle}}
      onPress={onPress}>
      <Text style={{...styles.buttonText, ...textStyle}}>{text}</Text>
      {iconName && <Icon style={styles.icon} name={iconName} />}
    </TouchableOpacity>
  );
};

export default TextButton;
