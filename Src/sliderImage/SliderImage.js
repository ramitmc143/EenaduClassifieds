import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const SliderImage = () => {
  const [images, setImages] = useState([
    require('../assets/images.jpg'),
    require('../assets/images1.jpg'),
    require('../assets/images2.jpg'),
    require('../assets/images3.jpg'),
  ]);

  return (
    <View>
      <SliderBox
        images={images}
        dotColor="red"
        inactiveDotColor="black"
        autoplay={true}
        autoplayInterval={3000}
        circleLoop={true}
        firstItem={0}
      />
    </View>
  );
};

export default SliderImage;

const styles = StyleSheet.create({});
