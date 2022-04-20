import * as React from 'react';
import {Button, View, Text, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// @ts-ignore
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


// @ts-ignore
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function LogoTitle(props:{children:string, tintColor?:string|undefined, }) {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/image/no-posts-dog.png')}
    />
  );
}

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default StackScreen;