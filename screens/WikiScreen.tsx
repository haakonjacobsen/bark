import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import defaultStyles from '../styles/screens';
import DogSvg from "../components/svg/DogSvg";
import { Dimensions } from 'react-native';
import StatBar from "../components/elements/StatBar";
import BreedStat from "../components/elements/BreedStat";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function WikiScreen(props:{breed:string}) {
  return (
    <ScrollView style={defaultStyles.fullScreen}>
      <Image source={require('../assets/mock/picture/wiki-picture-golden-retriver.jpg')} style={styles.breedPicture}/>
      <View style={styles.screenContent}>
        <View style={styles.breedRow}>
          <View style={styles.breedSvg}>
            <DogSvg/>
          </View>
          <Text adjustsFontSizeToFit style={styles.breedText}>{props.breed}</Text>
        </View>
        <View style={styles.BreedStats}>
          <BreedStat statName={"Aktivitetsnivå"} statNumber={9}/>
          <BreedStat statName={"Sammarbeid"} statNumber={1}/>
          <BreedStat statName={"Størrelse"} statNumber={2}/>
          <BreedStat statName={"Pelspleie"} statNumber={7}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContent:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  breedPicture:{
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  breedRow:{
    display: "flex",
    flexDirection:'row',
    width: '100%',
    aspectRatio: 5,
  },
  breedSvg: {
    width: '20%',
    marginRight: 10,
  },
  arrowSvg: {
    width: '5%',
  },
  breedText:{
    fontSize: 22,
    fontWeight: '700',
    flex: 1,
    color: '#616161',
    alignSelf: "center"
  },
  BreedStats:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
  }
});
