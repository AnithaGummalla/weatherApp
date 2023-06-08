import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from './WeatherAPIConstants';

const initialState = {
  loading: false,
  weather: [],
  error: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        loading: false,
        weather: action.payload,
        error: '',
      };
    case GET_WEATHER_FAILURE:
      return {
        loading: false,
        weather: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
