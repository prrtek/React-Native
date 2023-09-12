import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';

const img = require('./pexels-anubhav-choudhary-15329969.jpg');
const imgs = require('./pexels-chirag-taunk-6470425.jpg');
const ImageUse = () => {
  return (
    <View>
      <Text>ImageUse</Text>
      <Image source={img} style={{height: 200, width: 100}} />
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={{height: 200, width: 100}}
      />
      <ImageBackground source={imgs}>
        <View style={{height: 200, width: 100}}>
          <Text>Prateek</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageUse;
