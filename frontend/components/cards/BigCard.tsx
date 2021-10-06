import React, {useState} from 'react';
import {Image,TouchableOpacity, StyleSheet, View} from 'react-native';
import Price from "../elements/Price";
import Age from "../elements/Age";
import DogLabel from "../elements/DogLabel";
import {PostProps} from "../../types/PostProps";


export default function BigCard(props:{key:number, post:PostProps, roundCorners:boolean}) {
  const [selected, toggleSelected] = useState(!props.roundCorners);

  return (
    <TouchableOpacity key={props.key} onPress={() => toggleSelected(!selected)}>
      <View style={[styles.cardContainer]}>
        <View style={selected ? styles.bigCard:[styles.bigCard, styles.cardBorder] }>
          <Image source={require('../../assets/mock/picture/post-image.jpg')} style={styles.picture}/>
          <View style={styles.infoBar}>
            <Price price={props.post.price}/>
            <Age age={props.post.dogAge}/>
            <View style={styles.dogLabel}>
              <DogLabel breed={props.post.dogBreed} inColumn={true}/>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  bigCard: {
    marginBottom: 20,
    width: '100%',
    aspectRatio: 1.1,
    overflow: "hidden",
    display:"flex",
    flexDirection: "column",
  },
  cardBorder: {
    borderRadius: 10,
  },
  picture:{
    resizeMode: 'cover',
    flex: 1,
    width: '100%'
  },
  infoBar:{
    height: '22%',
    display: "flex",
    flexDirection: "row"
  },
  dogLabel:{
    flex: 1.75
  }
});