import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Svg, { Path } from "react-native-svg";
import DogSvg from "../svg/DogSvg"
import { Dimensions } from 'react-native';
import defaultStyles from "../../styles/screens";
import DogLogo from "../../components/elements/DogLogo";
const screenWidth = Dimensions.get('window').width;

type DogBreeder = {
  name:string;
  phoneNr:number;
  email:string;
  dogs:[string]
}

export default function Breeder() {
  return (
    <View style={styles.dogItem}>
      <View style={[styles.imageContainer, defaultStyles.shadow]}>
        <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.profilePic}/>
        <View style={styles.dogBreed}>
          <DogLogo/>
        </View>
      </View>
      <Text style={styles.breederName}>Hei</Text>
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
  imageContainer:{
    height: (screenWidth - 40)/4, // NEEDS TO CHANGE, BAD PRACTICE, USE WIDTH.
    aspectRatio: 1
  },
  profilePic:{
    height: '100%',
    aspectRatio: 1,
    borderRadius: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginBottom: 5
  },
  dogBreed:{
    position: "absolute",
    height: '40%',
    width: '40%',
    bottom: 0,
    right: 0,
  },
  breederName:{
    alignSelf: "center",
    fontSize: 15,
    textAlign: 'center'
  }
});