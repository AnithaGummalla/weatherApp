import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import WeekDaysData from '../DATA/WeekDaysData';
import SunTiming from '../DATA/SunTiming';
import DailyTime from '../DATA/DailyTime';
import HomeScreen from './HomeScreen';
import moment from 'moment';
import HourlyTime from '../DATA/DailyTime';

const WeekDays = ({route, navigation}) => {
  console.log(week);
  const {week, place, country, hourly, sundetails} = route.params;
  const handleView = () => {
    navigation.navigate('homescreen');
  };

  return (
    <View style={{backgroundColor: '#77b5fe', flex: 1, gap: 15}}>
      <Pressable
        style={{alignItems: 'center', marginTop: 30}}
        onPress={handleView}>
        <Image
          source={require('../../assets/images/arrow.png')}
          style={{height: 30, width: 30, tintColor: 'white'}}
        />
      </Pressable>
      <View style={{alignItems: 'center', gap: 15}}>
        <Text style={styles.placeName}>{place}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
      <View style={styles.hrLine}></View>
      <HourlyTime hourly={hourly} />
      <View style={styles.hrLine}></View>
      <WeekDaysData week={week} />
      <View style={styles.hrLine}></View>
      <SunTiming sundetails={sundetails} />
    </View>
    // <View
    //   style={{
    //     backgroundColor: '#77b5fe',
    //   }}>
    //   <Pressable
    //     style={{alignItems: 'center', marginTop: 30}}
    //     onPress={handleView}>
    //     <Image
    //       source={require('../../assets/images/arrow.png')}
    //       style={{height: 30, width: 30, tintColor: 'white'}}
    //     />
    //   </Pressable>
    //   <View
    //     style={{
    //       padding: 10,
    //       gap: 30,
    //       backgroundColor: '#77b5fe',
    //       height: '100%',
    //     }}>
    //     <View
    //       style={{
    //         alignItems: 'center',
    //         gap: 15,
    //         height: 100,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //       <Text
    //         style={{
    //           width: '100%',
    //           textAlign: 'center',
    //           fontWeight: 'bold',
    //           fontSize: 30,
    //           color: 'white',
    //         }}>
    //         {city}
    //       </Text>
    //       <Text style={{width: '100%', textAlign: 'center', color: 'white'}}>
    //         {country}
    //       </Text>
    //     </View>
    //     <View style={styles.hrLine}></View>
    //     <DailyTime />
    //     <View style={styles.hrLine}></View>
    //     <View
    //       style={{
    //         shadowColor: 'red',
    //         shadowOffset: {width: -2, height: 4},
    //         shadowOpacity: 0.2,
    //         shadowRadius: 3,
    //       }}>
    //       <SunTiming />
    //     </View>
    //   </View>
    // </View>
  );
};

export default WeekDays;

const styles = StyleSheet.create({
  placeName: {
    width: '100%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  country: {width: '100%', color: '#ececec', textAlign: 'center'},
  hrLine: {width: '100%', height: 1, backgroundColor: '#ececec'},
});
