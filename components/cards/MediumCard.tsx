import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Dimensions } from 'react-native';
import Price from "../elements/Price";
import Age from "../elements/Age";
import DogLabel from "../elements/DogLabel";
const screenWidth = Dimensions.get('window').width;

type PostProps = {
  title: string;
  //post_age: bigint;
  picture: [string];
  price: number;
  dogAge: number;
  dogBreed: string;
}

export default function MediumCard(props:PostProps) {
  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.mediumCard]}>
        <DogLabel breed={props.dogBreed} inColumn={false}/>
        <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.picture}/>
        <View style={styles.infoBar}>
          <Price price={props.price}/>
          <Age age={props.dogAge}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  default:{
    color: '#616161'
  },
  cardContainer:{
    width: screenWidth/2,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  mediumCard: {
    width: '100%',
    aspectRatio: 0.9,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    display:"flex",
    flexDirection: "column",
  },
  picture:{
    resizeMode: 'cover',
    flex: 1,
    width: '100%'
  },
  infoBar:{
    height: '22%',
    display: "flex",
    flexDirection: "row"
  }
});