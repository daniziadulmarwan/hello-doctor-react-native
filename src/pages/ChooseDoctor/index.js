import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {
  DMDoctorMessage1,
  DMDoctorMessage2,
  DMDoctorMessage3,
  DMDoctorMessage4,
} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        profile={DMDoctorMessage1}
        name="Alexandre Jannie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        profile={DMDoctorMessage2}
        name="Alexandre Jannie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        profile={DMDoctorMessage3}
        name="Alexandre Jannie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        profile={DMDoctorMessage4}
        name="Alexandre Jannie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
