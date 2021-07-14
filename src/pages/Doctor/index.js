import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
  Gap,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {DMRateDoctor1, DMRateDoctor2, DMRateDoctor3} from '../../assets';
import {Fire} from '../../configs';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getNews();
    getCategory();
  }, []);

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getCategory = () => {
    Fire.database()
      .ref('category/')
      .once('value')
      .then(res => {
        if (res.val()) {
          setCategorys(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionWrapper}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categorys.map(doctor => {
                  return (
                    <DoctorCategory
                      key={doctor.id}
                      category={doctor.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              name="Alexa Rachel"
              desc="Pediatrician"
              avatar={DMRateDoctor1}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Sonny Frank"
              desc="Pediatrician"
              avatar={DMRateDoctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Ayesha"
              desc="Pediatrician"
              avatar={DMRateDoctor3}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  sectionWrapper: {
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
