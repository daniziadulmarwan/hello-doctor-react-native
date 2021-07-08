import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {DMUserImageProfile} from '../../assets';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors} from '../../utils';

const EditProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Update Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile avatar={DMUserImageProfile} />
          <Gap height={26} />
          <Input label="Full name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
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
