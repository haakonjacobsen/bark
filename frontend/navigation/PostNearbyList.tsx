import React from 'react';
import {ScrollView, StyleSheet, View, Text} from "react-native";
import MediumCard from "../components/cards/MediumCard";
import defaultStyles from "../styles/screens";
import {PostProps} from "../types/PostProps";
import {MockData} from "../assets/mock/data/MockData";
import BigCard from "../components/cards/BigCard";

function PostNearbyList(props:{title:string}) {
  return (
    <View style={styles.container}>
      <View style={defaultStyles.sectionHeader}>
        <Text style={defaultStyles.sectionHeaderText}>{props.title}</Text>
      </View>
      <ScrollView style={styles.listItems} horizontal={true} showsHorizontalScrollIndicator={false}>
        {MockData.map((post, index) =>(
            <View style={{marginRight:20}}>
              <MediumCard key={index} post={post} />
            </View>
        ))}
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
