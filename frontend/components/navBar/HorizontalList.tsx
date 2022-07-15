import React from 'react';
import {ScrollView, StyleSheet, View, Text} from "react-native";
import Breeder from "../elements/DogBreeder";
import DogTag from "../elements/DogTag";

type ListProps = {
  title: string;
}

function HorizontalList(props:ListProps) {
  return (
      <View style={styles.container}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>{props.title}</Text>
        </View>
        <ScrollView style={styles.listItems} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Breeder />
          <Breeder />
          <Breeder />
          <Breeder />
          <DogTag dogBreed={'Golden Retriver'}/>
          <DogTag dogBreed={'Golden Retriver'}/>
          <DogTag dogBreed={'Golden Retriver'}/>
          <DogTag dogBreed={'Golden Retriver'}/>
        </ScrollView>
      </View>
  ); 
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    display: "flex",
    marginBottom: 40
  },
  listHeader:{
  },
  listHeaderText:{
    fontSize: 25,
    fontWeight: '700'
  },
  listItems:{
    height: '100%',
    overflow:'visible',
    paddingTop: 15,
    flex: 1,
    flexDirection: 'row',
  }
});

export default HorizontalList;
