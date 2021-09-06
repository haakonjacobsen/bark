import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Svg, { Path } from "react-native-svg";
import DogSvg from "../svg/DogSvg"
import { Dimensions } from 'react-native';
import DogLogo from './DogLogo'
const screenWidth = Dimensions.get('window').width;

type Dog = {
  breed: string;
}

export default function DogTag() {
  return (
    <View style={styles.dogItem}>
      <DogLogo/>
      <Text style={styles.dogLogoText}>Hei</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dogItem:{
    display: 'flex',
    flexGrow: 1,
    width: (screenWidth - 40)/4,
    marginRight: 20
  },
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
  },
  dogLogoText:{
    alignSelf: "center",
    fontSize: 15,
    textAlign: 'center'
  }
});