import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/screens';

export default function SearchScreen() {
  return (
    <View style={[styles.screen, styles.search]}>
        <Text>Search screen</Text>
    </View>
  );
}
