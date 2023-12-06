import { View, Text } from 'react-native'
import React from 'react';
import WebView from 'react-native-webview';

const LoginWebView = () => {
  return (
    <>
     <View style={{flex:1}}>
        <WebView source={{uri:'https://www.eenaduclassifieds.com/'}}  />
     </View>
    </>
  )
}

export default LoginWebView