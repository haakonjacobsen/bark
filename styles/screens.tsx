import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  home:{
  },
  shadow:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginBottom: 5
  }
});

export default defaultStyles