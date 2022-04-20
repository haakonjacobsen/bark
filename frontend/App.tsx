import React from 'react';
import Tabs from './navigation/Tabs';
import { store } from './redux/store';
import { Provider } from 'react-redux'


export default function App() {
  return (
    <Provider store={store}>
        <Tabs/>
    </Provider>
  );
}