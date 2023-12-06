import {View, Text} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';


const RegisterWebView = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <WebView source={{uri: 'https://www.eenaduclassifieds.com/register'}} />
      </View>
    </>
  );
};

export default RegisterWebView;
