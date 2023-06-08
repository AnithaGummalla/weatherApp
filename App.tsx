import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/store';
import ReduxScreen from './src/screens/ReduxScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Navigation from './src/NAVIGATION/BottomSheetTrail';
import WeekDays from './src/screens/WeekDays';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
