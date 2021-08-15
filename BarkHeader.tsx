import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function BarkHeader() {
    return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.barkHeader}>Bark</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#EDD994',
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
  }
});
