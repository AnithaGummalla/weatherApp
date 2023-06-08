import {View, Text, Flatlist} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchWeatherReport} from '../redux';
import SunTiming from '../DATA/SunTiming';

const ReduxScreen = ({fetchWeatherData, weatherData}) => {
  const [sun, setSun] = useState([
    {
      title: 'Sunrise',
      name: weatherData.weather.forecast.forecastday[0].astro.sunrise,
    },
    {
      title: 'Sunset',
      name: weatherData.weather.forecast.forecastday[0].astro.sunset,
    },
    {
      title: 'Precipitation',
      name: weatherData.weather.current.precip_mm + ' ' + `mm`,
    },
    {title: 'Humidity', name: weatherData.weather.current.humidity},
    {title: 'Pressure', name: weatherData.weather.current.pressure_mb},
    {title: 'Wind', name: weatherData.weather.current.wind_kph},
  ]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <View>
      <Text>ReduxScreen</Text>
      {weatherData.loading ? (
        <Text>Loading...</Text>
      ) : weatherData.error ? (
        <Text>{weatherData.error}</Text>
      ) : (
        <View>
          <Text>weather report</Text>
          <SunTiming sun={sun} />
        </View>
      )}
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
    fetchWeatherData: () => dispatch(fetchWeatherReport()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxScreen);
