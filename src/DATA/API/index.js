import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TextInput, StyleSheet} from 'react-native';
import debounce from 'lodash.debounce';

function ApiIntegration() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  // 'http://api.weatherapi.com/v1/forecast.json?key=923c3a3dd7a54ba19ef113030230506&q=London&days=1&aqi=no&alerts=no',

  // useEffect(() => {
  //   const getData =
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/forecast.json?key=923c3a3dd7a54ba19ef113030230506&q=${text}&days=1&aqi=no&alerts=no`,
  //     )
  //     .then(res => {
  //       // setData(res.data.current.condition.text);
  //       setData({
  //         ...data,
  //         name: res.data.location.country,
  //         celsius: res.data.current.temp_c,
  //         humidity: res.data.current.humidity,
  //       });
  //     });
  // }, []);

  const changeText = debounce(text => {
    console.log('debounce technique');
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=923c3a3dd7a54ba19ef113030230506&q=${text}&days=1&aqi=no&alerts=no`,
      )
      .then(res => {
        // setData(res.data.current.condition.text);
        setData({
          ...data,
          name: res.data.location.country,
          celsius: res.data.current.temp_c,
          humidity: res.data.current.humidity,
        });
      });
  }, 500);

  const handleSearch = text => {
    changeText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="search city"
        placeholderTextColor={'white'}
        onChangeText={newText => handleSearch(newText)}
      />
      <Text>{data.name}</Text>
      <Text>{data.celsius}</Text>
      <Text>{data.humidity}</Text>
    </View>
  );
}

export default ApiIntegration;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 25,
    width: 330,
    backgroundColor: '#87cefa',
    paddingLeft: 20,
  },
  hrLine: {width: '100%', height: 1, backgroundColor: '#ececec'},
});
