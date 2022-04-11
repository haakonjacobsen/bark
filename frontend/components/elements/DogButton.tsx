import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DogSvg from "../svg/DogSvg"
import buttonStyles from "../../styles/buttonStyles";

export default function DogButton(props:{toggleModal:Function, dogBreed:String}) {
  return (
    <TouchableOpacity style={styles.dogLogo} onPress={() => props.toggleModal(true)}>
      <DogSvg/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dogLogo:{
    ...buttonStyles.roundButton,
    marginRight: 10,
  }
});