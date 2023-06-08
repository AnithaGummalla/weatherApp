import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './redux/WeatherAPIReducer';

const rootReducer = combineReducers({
  weatherRoot: weatherReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
