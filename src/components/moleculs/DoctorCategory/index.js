import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICDokterUmum, ICDokterPsikiater, ICDokterObat} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    switch (category) {
      case 'dokter umum':
        return <ICDokterUmum style={styles.illustration} />;
        break;
      case 'psikiater':
        return <ICDokterPsikiater style={styles.illustration} />;
        break;
      case 'dokter mata':
        return <ICDokterPsikiater style={styles.illustration} />;
        break;
      case 'dokter gigi':
        return <ICDokterObat style={styles.illustration} />;
        break;
      default:
        return <ICDokterUmum style={styles.illustration} />;
        break;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    marginRight: 10,
    borderRadius: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
