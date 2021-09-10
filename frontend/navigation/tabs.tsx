import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();
import {StyleSheet} from "react-native";

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: true,
        headerTitle: 'Bark',
        headerStyle: style.header,
        headerTitleStyle: style.barkHeader,
        tabBarStyle: {backgroundColor: '#EDD994'}}}/>
      <Tab.Screen name="Search" component={SearchScreen}/>
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        headerShown: true,
        headerTitle: 'Bark',
        headerStyle: style.header,
        headerTitleStyle: style.barkHeader,
        tabBarStyle: style.tabStyle}}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  ); 
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#EDD994',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  barkHeader: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontWeight: '300',
    fontSize: 25,
  },
  tabStyle:{
    backgroundColor: '#EDD994',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  }
});

export default Tabs;