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
  absScreenPart:{
    zIndex: 100,
    display:'flex',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
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
    },
  sectionHeader:{
    width:'100%',
    marginBottom:10
  },
  sectionHeaderText:{
    color: 'black',
    fontWeight: '700',
    fontSize: 25
  }
});

export default defaultStyles