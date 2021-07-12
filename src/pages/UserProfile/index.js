import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DMUserImageProfile, ILNullPhoto} from '../../assets';
import {Header, Profile, List, Gap} from '../../components';
import {colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.uri};
      setProfile(data);
    });
  }, []);
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          avatar={DMUserImageProfile}
          name={profile.fullName}
          desc={profile.profession}
          avatar={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Language"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Give Me Rate"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
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
