import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';

const HourlyTime = ({hourly}) => {
  console.log(hourly);
  return (
    <View>
      <FlatList
        data={hourly}
        horizontal
        keyExtractor={(item, index) => index + item.key}
        renderItem={({item}) => (
          <View style={{gap: 22, justifyContent: 'center', width: 80}}>
            <Text
              style={{
                fontWeight: 100,
                alignItems: 'center',
                color: '#ececec',
              }}>
              {moment(item.hour).format('LT')}
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                width: 50,
                marginRight: 5,
                color: 'white',
              }}>
              {item.hourTemp}&deg;
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default HourlyTime;
