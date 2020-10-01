import React from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import styles from './style';
import {Colors} from 'utils/Theme';

const CustomRadioButton = ({selected, options = [], onPress}) => {
  return (
    <RadioForm>
      {options.map((obj, i) => (
        <RadioButton labelHorizontal={true} key={i} wrapStyle={styles.rowView}>
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={selected === i}
            onPress={onPress}
            buttonInnerColor={Colors.orange}
            buttonOuterColor={Colors.orange}
            buttonSize={10}
            buttonOuterSize={20}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal={true}
            onPress={onPress}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

export default CustomRadioButton;
