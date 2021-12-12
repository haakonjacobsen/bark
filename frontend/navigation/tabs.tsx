import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();
import {StyleSheet, Text, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useFonts,
  OleoScriptSwashCaps_400Regular,
  OleoScriptSwashCaps_700Bold
} from '@expo-google-fonts/oleo-script-swash-caps'

function Tabs() {
  let [fontsLoaded] = useFonts({
    OleoScriptSwashCaps_400Regular,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>)}
  else {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            // @ts-ignore
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown: true,
            headerTitle: 'Bark',
            headerStyle: style.header,
            headerTitleStyle: style.barkHeader,
            tabBarStyle: style.tabStyle
          }}/>
          <Tab.Screen name="Search" component={SearchScreen} options={{
            headerShown: false,
            headerTitleStyle: style.barkHeader,
            tabBarStyle: style.tabStyle
          }}/>
          <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
            headerShown: true,
            headerTitle: 'Bark',
            headerStyle: style.header,
            headerTitleStyle: style.barkHeader,
            tabBarStyle: style.tabStyle
          }}/>
          <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
  }
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
    fontFamily: 'OleoScriptSwashCaps_400Regular',
    fontWeight: '300',
    fontSize: 30,
    paddingHorizontal: 20,
    textAlign: 'center'
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