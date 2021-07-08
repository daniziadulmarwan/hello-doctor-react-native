import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DMDoctorMessage1,
  DMDoctorMessage2,
  DMDoctorMessage3,
} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [data] = useState([
    {
      id: 1,
      profile: DMDoctorMessage1,
      name: 'Alexandre Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DMDoctorMessage2,
      name: 'Nairobi Putri Hayza',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 3,
      profile: DMDoctorMessage3,
      name: 'John McParker Steve',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {data.map(item => {
          return (
            <List
              key={item.id}
              profile={item.profile}
              name={item.name}
              desc={item.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
