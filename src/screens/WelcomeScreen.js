import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navigation from '../NAVIGATION/BottomSheetTrail';
import HomeScreen from './HomeScreen';

const WelcomeScreen = ({navigation}) => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('homescreen');
    }, 1000);
    // () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/cloudy.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../assets/images/Weatherapi.png')}
        style={styles.credit}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
  },
  credit: {
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 40,
  },
});
