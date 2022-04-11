import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import HorizontalList from "../navigation/HorizontalList"
import PostNearbyList from "../navigation/PostNearbyList";
import DogMatcher from "../components/cards/DogMatcher";
import {MockData} from "../assets/mock/data/MockData";
import {PostProps} from "../types/PostProps";


export default function HomeScreen() {
  const [posts, setPosts] = useState<PostProps[]>(MockData);
  
  return (
    <ScrollView>
      <View style={[defaultStyles.defScreen]}>
        <DogMatcher/>
        <PostNearbyList title={"Dogs nearby"}/>
        <DogMatcher/>
        {posts.map((data, index) => (
          <BigCard key={index} post={data} roundCorners={true}/>
          ))}
      </View>
    </ScrollView>
  );
}