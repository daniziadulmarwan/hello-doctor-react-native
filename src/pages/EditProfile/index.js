import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {DMUserImageProfile} from '../../assets';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors, getData} from '../../utils';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const update = () => {
    //navigation.navigate('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Update Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile avatar={profile.photo} isRemove />
          <Gap height={26} />
          <Input label="Full name" value={profile.fullName} />
          <Gap height={24} />
          <Input label="Pekerjaan" value={profile.profession} />
          <Gap height={24} />
          <Input label="Email" value={profile.email} />
          <Gap height={24} />
          <Input label="Password" value={password} disable />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
