import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DMDoctorMessage4} from '../../assets';
import {Header, Profile, ProfileItem, Button, Gap} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" />
      <Profile
        avatar={DMDoctorMessage4}
        name="Nairoby Putri Hayza"
        desc="Dokter Anak"
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem label="No. STR" value="000000154385693485" />
      <View style={styles.wrapper}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 33,
  },
});
