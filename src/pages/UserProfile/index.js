import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DMUserImageProfile} from '../../assets';
import {Header, Profile, List, Gap} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={10} />
      <Profile
        avatar={DMUserImageProfile}
        name="Shayna Melinda"
        desc="Product Designer"
      />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
