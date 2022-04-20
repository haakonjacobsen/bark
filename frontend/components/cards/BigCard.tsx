import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Dimensions} from 'react-native';
import Price from "../elements/Price";
import Age from "../elements/Age";
import DogLabel from "../elements/DogLabel";
import {PostProps} from "../../types/PostProps";
import {useNavigation} from "@react-navigation/native";


export default function BigCard(props:{key:number, post:PostProps}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity key={props.key} onPress={() => {
      navigation.navigate(
        'DogPostScreen' as never,
        {
          post: props.post
        } as never
      )
    }}>
      <View style={[styles.cardContainer]}>
        <View style={styles.bigCard }>
          <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.picture}/>
          <View style={styles.infoBar}>
            <Price price={props.post.price}/>
            <Age age={props.post.dogAge}/>
            <View style={styles.dogLabel}>
              <DogLabel breed={props.post.dogBreed} inColumn={true}/>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    aspectRatio: 1.1,
    overflow: "hidden",
    display:"flex",
    flexDirection: "column",
  },
  bigCardSelected: {
    position: "absolute",
    top:0,
    left:0,
    zIndex: 100,
    borderRadius: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
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
  },
  dogLabel:{
    flex: 1.75
  }
});