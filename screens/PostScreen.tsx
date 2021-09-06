import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from '../styles/screens';
import Price from "../components/elements/Price";
import Age from "../components/elements/Age";
import DogLabel from "../components/elements/DogLabel";
import BigCard from "../components/cards/BigCard";

type PostProps = {
  title: string;
  //post_age: bigint;
  picture: string[];
  price: number;
  dogAge: number;
  dogBreed: string;
}
const mockProps = {
  title: 'Hund selges',
  picture: ['../../assets/mock/picture/post-image.jpg'],
  price: 3500,
  dogAge: 340,
  dogBreed: 'Golden Retriver'
}

export default function PostScreen(props:{price:number; breed:string; age:number;}) {
  return (
    <ScrollView style={defaultStyles.fullScreen}>
      <BigCard post={mockProps} roundCorners={false}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  picture:{
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoBar:{
    height: '22%',
    display: "flex",
    flexDirection: "row"
  },
  bigCard: {
    width: '100%',
    aspectRatio: 1.1,
    marginBottom: 20,
    overflow: "hidden",
    display:"flex",
    flexDirection: "column",
  },
});
