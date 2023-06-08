import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchWeatherReport} from '../redux';
import HourlyTime from '../DATA/DailyTime';
import WeekDays from './WeekDays';
import SunTiming from '../DATA/SunTiming';
import moment from 'moment';
import {debounce} from 'lodash';

const HomeScreen = ({navigation, fetchWeatherData, weatherData}) => {
  const [text, setText] = useState('Bangalore');
  const [sundetails, setSunDetails] = useState([
    {
      key: 1,
      name: 'Sunrise',
      data: weatherData.weather.forecast.forecastday[0].astro.sunrise,
    },
    {
      key: 2,
      name: 'Sunset',
      data: weatherData.weather.forecast.forecastday[0].astro.sunset,
    },
    {
      key: 3,
      name: 'Precipitation',
      data: weatherData.weather.current.precip_mm + ' ' + `mm`,
    },
    {key: 4, name: 'Humidity', data: weatherData.weather.current.humidity},
    {key: 5, name: 'Pressure', data: weatherData.weather.current.pressure_mb},
    {key: 5, name: 'Wind', data: weatherData.weather.current.wind_kph},
  ]);
  const [week, setWeek] = useState([
    {
      day: weatherData.weather.location.localtime,
      icon: weatherData.weather.forecast.forecastday[0].day.condition.icon,
      maxTemp: weatherData.weather.forecast.forecastday[0].day.maxtemp_c,
      minTemp: weatherData.weather.forecast.forecastday[0].day.mintemp_c,
      avgTemp: weatherData.weather.forecast.forecastday[0].day.avgtemp_c,
    },
    {
      day: weatherData.weather.forecast.forecastday[1].date,
      icon: weatherData.weather.forecast.forecastday[1].day.condition.icon,
      maxTemp: weatherData.weather.forecast.forecastday[1].day.maxtemp_c,
      minTemp: weatherData.weather.forecast.forecastday[1].day.mintemp_c,
      avgTemp: weatherData.weather.forecast.forecastday[1].day.avgtemp_c,
    },
    {
      day: weatherData.weather.forecast.forecastday[2].date,
      icon: weatherData.weather.forecast.forecastday[2].day.condition.icon,
      maxTemp: weatherData.weather.forecast.forecastday[2].day.maxtemp_c,
      minTemp: weatherData.weather.forecast.forecastday[2].day.mintemp_c,
      avgTemp: weatherData.weather.forecast.forecastday[2].day.avgtemp_c,
    },
  ]);

  const [hourly, setHourly] = useState([
    {
      hourTemp: weatherData.weather.forecast.forecastday[0].hour[0].temp_c,
      hour: weatherData.weather.forecast.forecastday[0].hour[0].time,
    },
    {
      hourTemp: weatherData.weather.forecast.forecastday[0].hour[1].temp_c,
      hour: weatherData.weather.forecast.forecastday[0].hour[1].time,
    },
    {
      hourTemp: weatherData.weather.forecast.forecastday[0].hour[2].temp_c,
      hour: weatherData.weather.forecast.forecastday[0].hour[2].time,
    },
    {
      hourTemp: weatherData.weather.forecast.forecastday[0].hour[3].temp_c,
      hour: weatherData.weather.forecast.forecastday[0].hour[3].time,
    },
    {
      hourTemp: weatherData.weather.forecast.forecastday[0].hour[4].temp_c,
      hour: weatherData.weather.forecast.forecastday[0].hour[4].time,
    },
    {
      hourTemp: weatherData.weather.forecast.forecastday[0].hour[5].temp_c,
      hour: weatherData.weather.forecast.forecastday[0].hour[5].time,
    },
  ]);
  console.log(hourly.hour);

  const handleSearch = debounce(textVal => {
    setText(textVal);
    console.log(textVal);
  }, 2000);
  useEffect(() => {
    fetchWeatherData(text);
  }, []);
  return (
    <View style={styles.container}>
      {/* SEARCH INPUT */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="search city"
          placeholderTextColor={'white'}
          onChangeText={newText => handleSearch(newText)}
        />
        <Text style={styles.celsius}>&deg;C</Text>
      </View>
      {/* DATE */}
      <View style={{alignItems: 'center', gap: 15}}>
        <Text style={styles.date}>
          {moment(weatherData.weather.location.localtime).format('dddd') +
            ' ' +
            moment(weatherData.weather.location.localtime).format('MMMM') +
            ' ' +
            moment(weatherData.weather.location.localtime).format('D')}
        </Text>
        <Text style={styles.placeName}>
          {weatherData.weather.location.name}
        </Text>
        <Text style={styles.country}>
          {weatherData.weather.location.country}
        </Text>
      </View>
      {/* DEGREES WITH IMAGE */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {weatherData.weather.current.temp_c}&deg;
          </Text>
          <Text style={{width: '100%', textAlign: 'center', color: '#ececec'}}>
            Feels like {weatherData.weather.current.feelslike_c}&deg;
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../../assets/images/arrow.png')}
                style={{height: 15, width: 15, alignSelf: 'center'}}
              />
              <Text style={{width: 50, color: 'white'}}>
                {weatherData.weather.forecast.forecastday[0].day.mintemp_c}&deg;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../../assets/images/up-arrows.png')}
                style={{height: 15, width: 15, alignSelf: 'center'}}
              />
              <Text style={{width: 50, color: 'white'}}>
                {weatherData.weather.forecast.forecastday[0].day.maxtemp_c}&deg;
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={{uri: `http:${weatherData.weather.current.condition.icon}`}}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
      </View>
      {/* SECOND HALF */}
      <View
        style={{
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            width: '100%',
            textAlign: 'center',
          }}>
          {weatherData.weather.current.condition.text}
        </Text>
        <View style={styles.hrLine}></View>
      </View>
      {/* HOURLY TIME */}
      <HourlyTime hourly={hourly} />
      <View style={styles.hrLine}></View>

      {/* SUN TIMINGS */}
      <SunTiming sundetails={sundetails} />
      <Pressable
        style={{alignItems: 'center'}}
        onPress={() =>
          navigation.navigate('weekdays', {
            week: week,
            hourly: hourly,
            sundetails: sundetails,
            place: weatherData.weather.location.name,
            country: weatherData.weather.location.country,
          })
        }>
        <Image
          source={require('../../assets/images/up-arrows.png')}
          style={{height: 30, width: 30, tintColor: 'white'}}
        />
      </Pressable>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    weatherData: state.weatherRoot,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherData: text => dispatch(fetchWeatherReport(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#77b5fe', gap: 15},
  celsius: {
    width: 50,
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  textInput: {
    borderRadius: 25,
    width: 330,
    backgroundColor: '#87cefa',
    paddingLeft: 20,
  },
  placeName: {
    width: '100%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  country: {width: '100%', color: '#ececec', textAlign: 'center'},
  hrLine: {width: '100%', height: 1, backgroundColor: '#ececec'},
});
