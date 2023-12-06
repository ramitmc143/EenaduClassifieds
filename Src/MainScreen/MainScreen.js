import {View, Text} from 'react-native';
import React from 'react';
import MainHeaderComponent from '../InitialLoginScreen/MainHeaderComponent';
import SliderImage from '../sliderImage/SliderImage';
import InitialLoginScreen from '../InitialLoginScreen/InitialLoginScreen';
import LoginScreen from '../LoginScreen/LoginScreen';

const MainScreen = () => {
  return (
    <View style={{marginTop: -16, backgroundColor: 'red'}}>
      {/* <View>
        <MainHeaderComponent />
      </View> */}
      <View style={{position: 'relative', top: 105, backgroundColor: 'blue'}}>
        <LoginScreen />
      </View>
      {/* <View style={{position: 'relative', top: 105}}>
        <SliderImage />
        <InitialLoginScreen />
      </View> */}
    </View>
  );
};

export default MainScreen;
