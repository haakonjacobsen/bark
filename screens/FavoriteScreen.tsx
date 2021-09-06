import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import defaultStyles from '../styles/screens';
import Price from "../components/elements/Price";
import Age from "../components/elements/Age";
import DogLabel from "../components/elements/DogLabel";
import PostScreen from "./PostScreen";
import WikiScreen from "./WikiScreen";


export default function FavoriteScreen(props:{price:number; breed:string; age:number;}) {
  return (
    <WikiScreen breed={"Golden Retriver"} />
  );
}

const styles = StyleSheet.create({

});
