import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import BarkHeader from "./BarkHeader";
import { useFonts, OleoScriptSwashCaps_400Regular, OleoScriptSwashCaps_700Bold } from '@expo-google-fonts/dev';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}