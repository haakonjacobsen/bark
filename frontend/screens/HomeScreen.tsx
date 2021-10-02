import React, {useEffect, useState} from 'react';
import { ScrollView, View} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import HorizontalList from "../navigation/HorizontalList"
import PostNearbyList from "../navigation/PostNearbyList";
import DogMatcher from "../components/cards/DogMatcher";
import {MockPostData} from "../assets/mock/data/MockPostData";
import {PostProps} from "../types/PostProps";

const mockProps = {
  picture: ['../../assets/mock/picture/post-image.jpg'],
  price: 3500,
  dogAge: 340,
  dogBreed: 'Golden Retriver'
}

export default function HomeScreen() {
  const [posts, setPosts] = useState<PostProps[]>(MockPostData);

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