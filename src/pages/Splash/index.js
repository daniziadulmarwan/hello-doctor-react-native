import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILogo} from '../../assets';
import {fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Get Started');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <ILogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#112340',
    marginTop: 20,
    fontFamily: fonts.primary[600],
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
