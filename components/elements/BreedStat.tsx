import { StyleSheet, View, Text} from "react-native";
import React from "react";
import StatBar from "./StatBar";
import { Dimensions } from 'react-native';
import DogSvg from "../svg/DogSvg";

const screenWidth = Dimensions.get('window').width;

export default function BreedStat(props:{statName:string, statNumber:number}) {
  return (
    <View style={styles.breedStat}>
      <View style={styles.statHeader}>
        <View style={styles.breedSvg}>
          <DogSvg/>
        </View>
        <Text style={styles.statText}>{props.statName}</Text>
      </View>
      <View style={styles.statBar}>
        <StatBar statNumber={props.statNumber}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  breedStat:{
    marginBottom: 30,
    width: screenWidth/2.5,
  },
  statHeader:{
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor:'#717171',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
  },
  breedSvg: {
    width: '20%',
    marginRight: 5,
  },
  statText:{
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
    color: '#616161',
    alignSelf: "center"
  },
  statBar:{
    width: '100%',
    aspectRatio: 10,
  }
});