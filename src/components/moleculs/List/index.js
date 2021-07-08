import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ICChevronRight} from '../../../assets';

import {ICDescription, ICTranslate, ICStar, ICAccount} from '../../../assets';

const List = ({profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <ICAccount />;
        break;
      case 'language':
        return <ICTranslate />;
        break;
      case 'rate':
        return <ICStar />;
        break;
      case 'help':
        return <ICDescription />;
        break;
      default:
        <ICAccount />;
        break;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.profileWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{desc}</Text>
      </View>
      {type === 'next' && <ICChevronRight />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  profileWrapper: {
    flex: 1,
    marginLeft: 16,
  },
});
