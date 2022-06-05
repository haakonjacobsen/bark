import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Button, Text, View} from "react-native";

const Tab = createBottomTabNavigator();

function LoginScreen() {
  return(
    <View>
      <Text>Login Screen</Text>
      <Button title={'loginButton'} onPress={ () => console.log('Logging in')}/>

    </View>
  )
}

function RegisterScreen() {
  return(
    <View>
      <Text>Register Screen</Text>
    </View>
  )
}

export default function Auth() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
}