import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ICarrowBack, ICArrowBackWhite} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICarrowBack />;
    }
    if (icon === 'back-light') {
      return <ICArrowBackWhite />;
    }
    <ICarrowBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
