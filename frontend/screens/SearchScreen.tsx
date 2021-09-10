import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import MediumCard from "../components/cards/MediumCard";

const mockProps = {
  title: 'Hund selges',
  picture: ['../../assets/mock/picture/post-image.jpg'],
  price: 3500,
  dogAge: 340,
  dogBreed: 'Golden Retriver'
}

export default function SearchScreen() {
  // 1 = bigCard, 2 = mediumCard, 3 = listView, 4 = mapView
  const [displayType, changeDisplayType] = useState(1);

  if (displayType === 1){
    return (
      <ScrollView style={[defaultStyles.defScreen]}>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={[defaultStyles.defScreen]}>
      <View style={styles.gridView}>
        <MediumCard post={mockProps} />
        <MediumCard post={mockProps} />
        <MediumCard post={mockProps} />
        <MediumCard post={mockProps} />
        <MediumCard post={mockProps} />
        <MediumCard post={mockProps} />
        <MediumCard post={mockProps} />
        <MediumCard post={mockProps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gridView: {
    display: 'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  }
});