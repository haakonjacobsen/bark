import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from '../styles/screens';
import Price from "../components/elements/Price";
import Age from "../components/elements/Age";
import DogLabel from "../components/elements/DogLabel";
import BigCard from "../components/cards/BigCard";

export default function PostScreen(props:{price:number; breed:string; age:number;}) {
  return (
    <ScrollView style={defaultStyles.fullScreen}>
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
