import React, {useEffect, useState} from 'react';
import { ScrollView, View} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import HorizontalList from "../navigation/HorizontalList"
import PostNearbyList from "../navigation/PostNearbyList";
import DogMatcher from "../components/cards/DogMatcher";

const mockProps = {
  picture: ['../../assets/mock/picture/post-image.jpg'],
  price: 3500,
  dogAge: 340,
  dogBreed: 'Golden Retriver'
}

type PostProps = {
  __v: number;
  _id: string;
  picture: string;
  date: string;
  description: string;
  dogAge: number;
  dogBreed: string;
  pictures: string[];
  price: number;
}

export default function HomeScreen() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  return (
    <ScrollView>
      <View style={[defaultStyles.defScreen]}>
        <DogMatcher/>
        <HorizontalList title={'Popular Breeds'}/>
        <PostNearbyList title={"Dogs nearby"}/>
        <DogMatcher/>
        <HorizontalList title={'Certified Breeders'}/>
        {posts.map((data) => (
          <BigCard post={data} roundCorners={true}/>
          ))}
      </View>
    </ScrollView>
  );
}