import React from 'react';
import { ScrollView, View} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import HorizontalList from "../navigation/HorizontalList"
import PostNearbyList from "../navigation/PostNearbyList";
import DogMatcher from "../components/cards/DogMatcher";

const mockProps = {
  title: 'Hund selges',
  picture: ['../../assets/mock/picture/post-image.jpg'],
  price: 3500,
  dogAge: 340,
  dogBreed: 'Golden Retriver'
}

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={[defaultStyles.defScreen]}>
        <DogMatcher/>
        <HorizontalList title={'Popular Breeds'}/>
        <PostNearbyList title={"Dogs nearby"}/>
        <DogMatcher/>
        <HorizontalList title={'Certified Breeders'}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
        <BigCard post={mockProps} roundCorners={true}/>
      </View>
    </ScrollView>
  );
}