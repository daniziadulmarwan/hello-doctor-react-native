import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILogo} from '../../assets';
import {Fire} from '../../configs';
import {fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged(user => {
        if (user) {
          //user login
          navigation.replace('MainApp');
        } else {
          //user not login
          navigation.replace('GetStarted');
        }
      });
      navigation.replace('GetStarted');
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
