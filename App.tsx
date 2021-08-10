import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  ); 
}

export default function App() {
  let [fontsLoaded] = useFonts({
    'Oleo-Script': require('./assets/fonts/OleoScriptSwashCaps-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.barkHeader}>Bark</Text>
      </SafeAreaView>
      
      <View style={styles.dock}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    backgroundColor: '#EDD994',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '11%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4, 
  },
  barkHeader: {
    color: 'black',
    fontFamily: 'Oleo-Script',
    fontSize: 30,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  dock: {
    position: 'absolute',
    backgroundColor: '#EDD994',
    height: 85,
    width: '100%',
    bottom: 0,
    left: 0,
  }
});
