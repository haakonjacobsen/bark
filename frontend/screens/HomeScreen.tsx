import React, { useState } from 'react';
import {Button, ScrollView, View} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import HorizontalList from "../components/navBar/HorizontalList"
import PostNearbyList from "../components/navBar/PostNearbyList";
import DogMatcher from "../components/cards/DogMatcher";
import {MockData} from "../assets/mock/data/MockData";
import {PostProps} from "../types/PostProps";


// @ts-ignore
export default function HomeScreen({ navigation}) {
  const [posts, setPosts] = useState<PostProps[]>(MockData);
  
  return (
    <ScrollView>
      <View style={[defaultStyles.defScreen]}>
        <DogMatcher/>
        <PostNearbyList title={"Dogs nearby"}/>
        <DogMatcher/>
        {posts.map((data, index) => (
          <BigCard key={index} post={data} />
          ))}
      </View>
    </ScrollView>
  );
}