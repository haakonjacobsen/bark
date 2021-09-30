import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Price from "../elements/Price";
import Age from "../elements/Age";
import DogLabel from "../elements/DogLabel";
import {PostProps} from "../../types/PostProps";


export default function BigCard(props:{post:PostProps, roundCorners:boolean}) {
  return (
    <View style={[styles.cardContainer]}>
      <View style={props.roundCorners ? [styles.bigCard, styles.cardBorder] : styles.bigCard }>
        <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.picture}/>
        <View style={styles.infoBar}>
          <Price price={props.post.price}/>
          <Age age={props.post.dogAge}/>
          <DogLabel breed={props.post.dogBreed} inColumn={true}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  bigCard: {
    marginBottom: 20,
    width: '100%',
    aspectRatio: 1.1,
    overflow: "hidden",
    display:"flex",
    flexDirection: "column",
  },
  cardBorder: {
    borderRadius: 10,
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