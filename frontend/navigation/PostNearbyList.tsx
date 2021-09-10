import React from 'react';
import {ScrollView, StyleSheet, View, Text} from "react-native";
import MediumCard from "../components/cards/MediumCard";

const mockProps = {
  title: 'Hund selges',
  picture: ['../../assets/mock/picture/post-image.jpg'],
  price: 3500,
  dogAge: 340,
  dogBreed: 'Golden Retriver'
}

function PostNearbyList(props:{title:string}) {
  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>{props.title}</Text>
      </View>
      <ScrollView style={styles.listItems} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{marginRight:20}}>
          <MediumCard post={mockProps} />
        </View>
        <View style={{marginRight:20}}>
          <MediumCard post={mockProps} />
        </View>
        <View style={{marginRight:20}}>
          <MediumCard post={mockProps} />
        </View>
        <View style={{marginRight:20}}>
          <MediumCard post={mockProps} />
        </View>
        <View style={{marginRight:20}}>
          <MediumCard post={mockProps} />
        </View>
        <View style={{marginRight:20}}>
          <MediumCard post={mockProps} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 40,
    width: '100%',
    display: "flex",
  },
  listHeader:{
  },
  listHeaderText:{
    color:"#576071",
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

export default PostNearbyList;