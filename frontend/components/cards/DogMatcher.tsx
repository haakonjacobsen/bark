import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import defaultStyles from "../../styles/screens"

export default function DogMatcher() {
  return (
    <View style={[styles.cardContainer, defaultStyles.shadow]}>
      <Text numberOfLines={1}
            adjustsFontSizeToFit style={[styles.cardText, styles.cardText1]}>Hvilken hund</Text>
      <Text numberOfLines={1}
            adjustsFontSizeToFit style={[styles.cardText, styles.cardText2]}>passer for</Text>
      <Text numberOfLines={1}
            adjustsFontSizeToFit style={[styles.cardText, styles.cardText3]}>deg?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    cardContainer:{
      padding: 20,
      width: '100%',
      aspectRatio: 1.25,
      backgroundColor: '#FFF8E5',
      borderRadius: 20,
      display: "flex",
      marginBottom: 40,
    },
    cardText:{
      color: '#E3740C',
      fontWeight: '700'
    },
    cardText1:{
      position: "absolute",
      left: '5%',
      top: '5%',
      fontSize: 70,
    },
    cardText2:{
      position: "absolute",
      left: '5%',
      top: '20%',
      fontSize: 75.5,
    },
    cardText3:{
      position: "absolute",
      left: '5%',
      top: '40%',
      fontSize: 150,
      width: '100%',
      textAlign: "center"
    }
  }
  );