import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ICSendGray, ICSendWhite} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <TouchableOpacity style={styles.container(disable)}>
      {disable && <ICSendGray />}
      {!disable && <ICSendWhite />}
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
