import React from 'react';
import {ScrollView, StyleSheet, View, Text} from "react-native";
import Breeder from "../components/elements/DogBreeder";
import DogLabel from "../components/elements/DogLabel";

type DogBreeder =
  {name: 'Stuff',
    phoneNr: '90153204',
    email: 'Stuff@stuff.com'
  dogs:[string]
}
function BreederList(props:DogBreeder[]) {
  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Certified Breeders✅</Text>
      </View>
      <ScrollView style={styles.listItems} horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.map((breeder:DogBreeder) =>(
          <Breeder/>
          ))}
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

export default BreederList;
