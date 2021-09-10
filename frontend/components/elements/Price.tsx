import { StyleSheet, Text, View} from "react-native";
import React from "react";


export default function Age(props: { price: number; }) {
  return (
  <View style={[styles.price, styles.infoItem]}>
    <View style={[styles.infoHeader, styles.priceHeader]}>
      <Text>Price</Text>
    </View>
    <View style={styles.priceInfo}>
      <Text>{props.price}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  infoItem:{
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.20,
    shadowRadius: 5,
  },
  price:{
    flex:1,
    backgroundColor: '#FFFAD0',
  },
  infoHeader:{
    height: '37.5%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    color: '#616161',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  priceHeader:{
    backgroundColor: '#ECCD7F',
  },
  priceInfo:{
    flex: 1,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    color: '#616161'
  }
});