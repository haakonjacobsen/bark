import React from 'react';
import {ScrollView, StyleSheet, View, Text} from "react-native";
import Breeder from "../components/elements/DogBreeder";
import DogTag from "../components/elements/DogTag";
import MediumCard from "../components/cards/MediumCard";
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

function PostNearbyList() {
  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Post Nearby</Text>
      </View>
      <ScrollView style={styles.listItems} horizontal={true} showsHorizontalScrollIndicator={false}>
        <MediumCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3000}
          dogAge={998}
          dogBreed={'Golden Retriver'}
        />
        <MediumCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3000}
          dogAge={998}
          dogBreed={'Golden Retriver'}
        />
        <MediumCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3000}
          dogAge={998}
          dogBreed={'Golden Retriver'}
        />
        <MediumCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3000}
          dogAge={998}
          dogBreed={'Golden Retriver'}
        />
        <MediumCard
          title={'Hund selges'}
          picture={['../../assets/mock/picture/post-image.jpg']}
          price={3000}
          dogAge={998}
          dogBreed={'Golden Retriver'}
        />
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

export default PostNearbyList;
