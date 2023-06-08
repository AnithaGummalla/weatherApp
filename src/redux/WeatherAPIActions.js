import axios from 'axios';
import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from './WeatherAPIConstants';

export const fetchWeatherRequest = () => {
  return {
    type: GET_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = weather => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: weather,
  };
};

export const fetchWeatherFailure = error => {
  return {
    type: GET_WEATHER_FAILURE,
    payload: error,
  };
};

export const fetchWeatherReport = text => {
  return dispatch => {
    dispatch(fetchWeatherRequest);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=923c3a3dd7a54ba19ef113030230506&q=${text}&days=3&aqi=no&alerts=no`,
      )
      .then(res => {
        const weather = res.data;
        console.log(weather);
        dispatch(fetchWeatherSuccess(weather));
      })
      .catch(err => {
        const errorMsg = err.message;
        dispatch(fetchWeatherFailure(errorMsg));
      });
  };
};
