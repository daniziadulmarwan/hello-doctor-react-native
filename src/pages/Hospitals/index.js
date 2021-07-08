import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  DMHospitalCover,
  DMHospitalPage1,
  DMHospitalPage2,
  DMHospitalPage3,
} from '../../assets';
import {ListHospital} from '../../components';
import {colors, fonts} from '.././../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DMHospitalCover} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.text}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DMHospitalPage1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy Family and Kids"
          address="Jln. Surya Sejahtera 20"
          pic={DMHospitalPage2}
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          pic={DMHospitalPage3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  background: {
    height: 240,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
    paddingTop: 30,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.primary[300],
    paddingTop: 6,
    textAlign: 'center',
  },
});
