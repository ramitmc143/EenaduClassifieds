import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RouteApp = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
        {/* <Stack.Screen
          name="MainScreen"
          getComponent={() => require('../MainScreen/MainScreen').default}
        /> */}
        <Stack.Screen
          name="loginScreen"
          getComponent={() => require('../LoginScreen/LoginScreen').default}
        />
        <Stack.Screen
          name="registerScreen"
          getComponent={() =>
            require('../RegisterScreen/RegisterScreen').default
          }
        />
        <Stack.Screen
          name="loginWebView"
          getComponent={() => require('../LoginWebView/LoginWebView').default}
        />
        <Stack.Screen
          name="registerWebView"
          getComponent={() =>
            require('../RegisterWebView/RegisterWebView').default
          }
        />
         <Stack.Screen
          name="captcha"
          getComponent={() =>
            require('../Captcha/GenerateCaptcha').default
          }
        />
      </Stack.Navigator>
    </>
  );
};

export default RouteApp;
