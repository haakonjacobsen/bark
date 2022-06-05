import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Dimensions } from 'react-native';
import Price from "../elements/Price";
import Age from "../elements/Age";
import DogLabel from "../elements/DogLabel";
const screenWidth = Dimensions.get('window').width;
import {PostProps} from "../../types/PostProps";
import { useNavigation } from '@react-navigation/native';

export default function MediumCard(props:{key:number, post:PostProps}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
        key={props.key}
        style={[styles.cardContainer]}
        onPress={() => {
          // @ts-ignore
          navigation.push(
            'DogPostScreen', {
              post: props.post
            }
          )
        }}
    >
      <View style={[styles.mediumCard]}>
        <DogLabel breed={props.post.dogBreed} inColumn={false}/>
        <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.picture}/>
        <View style={styles.infoBar}>
          <Price price={props.post.price}/>
          <Age age={props.post.dogAge}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default:{
    color: '#616161'
  },
  cardContainer:{
    width: screenWidth/2-30,
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