import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, { Path } from "react-native-svg";
import DogSvg from "../svg/DogSvg"

type Dog = {
  breed: string;
}

export default function DogLogo() {
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