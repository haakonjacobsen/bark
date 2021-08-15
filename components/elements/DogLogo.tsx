import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Svg, { Path } from "react-native-svg";
import DogSvg from "../svg/DogSvg"
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

type Dog = {
  breed: string;
}

export default function DogLabel() {
  return (
    <View style={styles.dogLogo}>
      <DogSvg/>
    </View>
  );
}

const styles = StyleSheet.create({
  dogLogo:{
    borderRadius: 1000,
    backgroundColor: '#FBFDFF',
    width: '100%',
    aspectRatio: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginBottom: 5
  }
});