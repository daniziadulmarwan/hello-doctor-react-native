import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Fire} from '../../configs';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDb, setPhotoForDb] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password minimal 6 karakter',
          type: 'default',
          backgroundColor: colors.warning,
          color: colors.white,
        });
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.warning,
            color: colors.white,
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDb;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data);
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.warning,
          color: colors.white,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showMessage({
            message: 'ops, you did not choose any photo',
            type: 'default',
            backgroundColor: colors.warning,
            color: colors.white,
          });
        } else {
          let source = {uri: response.assets[0].uri};
          setPhotoForDb(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header title="Update Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile avatar={photo} isRemove onPress={getImage} />
          <Gap height={26} />
          <Input
            label="Full name"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
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
