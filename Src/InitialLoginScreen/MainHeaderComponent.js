import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SliderImage from '../sliderImage/SliderImage';
import {useNavigation} from '@react-navigation/native';

const MainHeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        height:120
        // marginTop:-20
      }}>
      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate('captcha')}>
        <Image
          source={require('../assets/EenaduClassifieds.jpg')}
          style={styles.image_logo}
        />
      </TouchableOpacity>

      {/* <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.AdContainer}>
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              color: 'white',
            }}>
            Post AD
          </Text>
        </TouchableOpacity>
        <View style={styles.loginFormContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{marginRight: 9, flexDirection: 'row'}}
              onPress={() => navigation.navigate('loginScreen')}>
              <Icon
                name="lock-closed"
                color="#4F8EF7"
                size={18}
                style={{marginRight: 3}}
              />
              <Text style={{fontSize: 15, color: '#4F8EF7', fontWeight: '600'}}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 9, flexDirection: 'row'}}
              onPress={() => navigation.navigate('registerScreen')}>
              <Icon
                name="person"
                color="#4F8EF7"
                size={18}
                style={{marginRight: 3}}
              />
              <Text style={{fontSize: 15, color: '#4F8EF7', fontWeight: '600'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      {/* <View style={{marginTop:25}}>
        <SliderImage />
      </View> */}
    </View>
  );
};

export default MainHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginFormContainer: {
    width: 420,
    height: 50,
    // backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    borderRadius: 20,
    borderColor: '#0000FF',
    marginRight: 15,
    marginTop: -10,
  },
  loginContainer: {
    justifyContent: 'flex-end',
    marginTop: -90,
  },
  AdContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // borderWidth:1,
    width: 140,
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    textAlign: 'center',
    padding: 5,
    marginTop: 5,
    marginRight: 25,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  image_logo: {
    width: 90,
    height: 90,
    marginTop: 5,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  logo: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 90,
    height: 90,
    marginTop:10
  },
});
