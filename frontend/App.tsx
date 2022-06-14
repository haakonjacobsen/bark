import React from 'react';
import Tabs from './navigation/Tabs';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import {OleoScriptSwashCaps_400Regular, useFonts} from "@expo-google-fonts/oleo-script-swash-caps";
import {OleoScript_400Regular} from "@expo-google-fonts/oleo-script";
import {Text, View} from "react-native";


export default function App() {
  let [fontsLoaded] = useFonts({
    OleoScriptSwashCaps_400Regular,
    OleoScript_400Regular,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>)
  } else {
    return (
      <Provider store={store}>
        <Tabs/>
      </Provider>
    );
  }
}