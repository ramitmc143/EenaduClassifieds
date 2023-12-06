import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const InitialLoginScreen = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'lightgray',
          width: 370,
          height: 200,
          top: 190,
          borderRadius: 10,
          margin: 20,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          //   alignContent:'flex-end'
        }}>
        <TouchableOpacity style={{borderWidth: 1, width: 70, height: 35,backgroundColor:'green',borderColor:'green'}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              color:'white'
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth: 1, width: 70, height: 35,backgroundColor:'#0390fc',borderColor:'#0390fc',}}>
          <Text   style={{
              textAlign: 'center',
              marginTop: 5,
              color:'white'
            }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitialLoginScreen;
