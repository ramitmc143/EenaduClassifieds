import {View, Text} from 'react-native';
import React from 'react';
import MainScreen from './Src/MainScreen/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import RouteApp from './Src/Navigations/RouteApp';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer>
        <RouteApp />
      </NavigationContainer>
    </View>
  );
};

export default App;
