import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import defaultStyles from "../../styles/screens";

export default function NoPostSection() {


  return (
    <View style={[emptyStyle.container]}>
      <Image source={require('../../assets/image/no-posts-dog.png')} style={emptyStyle.picture}/>
      <View style={[emptyStyle.prevSearchPanel]}/>
      <View style={[emptyStyle.textContainer]}>
        <Text style={[defaultStyles.sectionHeaderText]}>Ingen resultater,  prøv igjen😕</Text>
      </View>
    </View>
  );
}

const emptyStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
  picture:{
    resizeMode:'contain',
    width: '100%',
    height: 300
  },
  textContainer:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop: 20
  },
  prevSearchPanel:{

  }
});