import {View, Text, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';

const SunTiming = ({sundetails}) => {
  return (
    <View
      style={{
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'black',
      }}>
      <FlatList
        data={sundetails}
        numColumns={3}
        keyExtractor={(item, index) => index + item.name}
        renderItem={({item}) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                gap: 10,
                width: 130,
              }}>
              <Text style={{color: '#ececec'}}>{item.name}</Text>
              <Text
                style={{
                  fontSize: 22,
                  width: 120,
                  fontWeight: 'bold',
                  marginBottom: 15,
                  color: 'white',
                }}>
                {item.data}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SunTiming;
