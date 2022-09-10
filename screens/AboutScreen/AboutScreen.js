import React from 'react'
import { Button, Image, Text, View } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View>
      <Image source={require('../../assets/images/aboutus.png')}/>
      <Image source={require('../../assets/images/ccell.png')} />

    </View>
  );
}
