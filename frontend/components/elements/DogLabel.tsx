import { StyleSheet, Text, View} from "react-native";
import React from "react";
import DogSvg from "../svg/DogSvg";


export default function DogLabel(props: { breed: string; inColumn:boolean}) {
  const breed = props.breed.split('-').map(s => s.charAt(0).toUpperCase() + s.substr(1)).join(' ');

  if (props.inColumn) {
    return (
      <View style={[styles.breedColumn, styles.infoItem]}>
        <View style={styles.breedSvgColumn}>
          <DogSvg/>
        </View>
        <Text allowFontScaling style={styles.breedTextColumn}>{breed}</Text>
      </View>
    );
  } else  {
    return (
      <View style={styles.breedRow}>
        <View style={styles.breedSvgRow}>
          <DogSvg/>
        </View>
        <Text allowFontScaling style={styles.breedTextRow}>{breed}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoItem:{
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.20,
    shadowRadius: 5,
  },
  breedColumn:{
    flex: 1,
    backgroundColor: '#FEF6AA',
    display: "flex"
  },
  breedSvgColumn: {
    flex: 1
  },
  breedTextColumn:{
    marginBottom: 10,
    height: '20%',
    textAlign: 'center',
    color: '#616161'
  },
  breedRow:{
    backgroundColor: '#FEF6AA',
    display: "flex",
    flexDirection:'row',
    height: '15%',
  },
  breedSvgRow: {
    width: '20%',
  },
  breedTextRow:{
    flex: 1,
    color: '#616161',
    alignSelf: "center"
  }
});