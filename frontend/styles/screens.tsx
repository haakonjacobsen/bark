import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  defScreen: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    overflow: 'visible'
  },
  fullScreen: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  home:{
  },
  shadowMild:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginBottom: 5
  },
  shadowMedium:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginBottom: 5
    }
});

export default defaultStyles