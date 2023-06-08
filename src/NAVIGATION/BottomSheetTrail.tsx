import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WeekDays from '../screens/WeekDays';
import WelcomeScreen from '../screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name=" " component={WelcomeScreen} />
        <Stack.Screen name="homescreen" component={HomeScreen} />
        <Stack.Screen name="weekdays" component={WeekDays} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
