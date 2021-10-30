import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { store } from './redux/store';
import { Provider } from 'react-redux'


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </Provider>
  );
}