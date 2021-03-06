import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ICBtnRmvPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({avatar, name, desc, isRemove, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View style={styles.avatarWrapper}>
          <Image source={avatar} style={styles.avatar} />
          {isRemove && <ICBtnRmvPhoto style={styles.removePhoto} />}
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.avatarWrapper} onPress={onPress}>
          <Image source={avatar} style={styles.avatar} />
          {isRemove && <ICBtnRmvPhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
