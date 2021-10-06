import { StyleSheet, Text, View} from "react-native";
import React from "react";


export default function Age(props: { age: string; }) {

  function getAge(date:string){
    const newAge = new Date(date);
    const today = new Date();
    const diffInTime = today.getTime() - newAge.getTime();
    const oneDay = 86400000; //1000 * 60 * 60 * 24
    const age = Math.round(diffInTime / oneDay);

    if (Math.trunc(age/365) > 0){
      return Math.trunc(age/365) + ' year' + (Math.trunc(age/365) === 1 ? '' : 's')
    } else if (Math.trunc(age/7) > 0){
      return Math.trunc(age/7) + ' week' + (Math.trunc(age/7) === 1 ? '' : 's')
    } return age + ' day' + (age === 1 ? '' : 's')
  }

  return (
    <View style={[styles.age, styles.infoItem]}>
      <View style={[styles.infoHeader, styles.ageHeader]}>
        <Text>Age</Text>
      </View>
      <View style={styles.priceInfo}>
        <Text>{getAge(props.age)}</Text>
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
  priceInfo:{
    flex: 1,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    color: '#616161'
  },
  age:{
    flex:1,
    backgroundColor: '#F8F1F1',
  },
  ageHeader:{
    backgroundColor: '#FF8585',
  },
});