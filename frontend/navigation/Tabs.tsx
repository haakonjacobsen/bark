import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import {StyleSheet, Text, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useFonts,
  OleoScriptSwashCaps_400Regular,
} from '@expo-google-fonts/oleo-script-swash-caps'
import DogPostScreen from "../screens/DogPostScreen";
import WikiScreen from "../screens/WikiScreen";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import Auth from "../screens/AuthScreen";
import {OleoScript_400Regular} from "@expo-google-fonts/oleo-script";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  let [fontsLoaded] = useFonts({
    OleoScriptSwashCaps_400Regular,
    OleoScript_400Regular,
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
            headerShown: false,
            headerTitle: 'Bark',
            headerStyle: style.header,
            headerTitleStyle: style.barkHeader,
            tabBarStyle: style.tabStyle
          }}/>
          <Tab.Screen name="Profile" component={ProfileScreen}  options={{
            headerShown: false,
            tabBarStyle: style.tabStyle
          }}/>
        </Tab.Navigator>
    );
  }
}

function Tabs() {
  const [isLoggedIn, setLogin] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={isLoggedIn ? Home:Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="WikiScreen" component={WikiScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="DogPostScreen" component={DogPostScreen} options={{headerTitle:''}}/>
      </Stack.Navigator>
    </NavigationContainer>
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