import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: border,
  }),
  label: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Reguler',
  },
});
