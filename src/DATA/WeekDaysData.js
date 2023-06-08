import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';

const WeekDaysData = ({week}) => {
  return (
    <View>
      <FlatList
        data={week}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            <Text style={{width: '30%', fontSize: 15, color: 'white'}}>
              {moment(item.days).format('dddd')}
            </Text>
            <Image
              source={{uri: `https:${item.icon}`}}
              style={{height: 30, width: 30}}
            />
            <Text style={{width: 50, color: 'white'}}>{item.avgTemp}&deg;</Text>
            <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
              <Image
                source={require('../../assets/images/up-arrows.png')}
                style={{height: 15, width: 15, alignSelf: 'center'}}
              />
              <Text style={{width: 50, color: 'white'}}>
                {item.minTemp}&deg;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
              <Image
                source={require('../../assets/images/arrow.png')}
                style={{height: 15, width: 15, alignSelf: 'center'}}
              />
              <Text style={{width: 50, color: 'white'}}>
                {item.maxTemp}&deg;
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default WeekDaysData;
