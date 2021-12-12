import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Price from "../elements/Price";
import Age from "../elements/Age";
import DogLabel from "../elements/DogLabel";
import {PostProps} from "../../types/PostProps";


export default function ListCard(props:{key:number, post:PostProps}) {

  return (
    <View key={props.key} style={styles.cardContainer}>
        <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.picture}/>
        <DogLabel breed={props.post.dogBreed} inColumn={true}/>
        <Price price={props.post.price}/>
        <Age age={props.post.dogAge}/>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    minWidth: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    overflow: 'visible'
  },
  picture:{
    width: '25%',
    resizeMode: "cover",
    height: '100%'
  }
});