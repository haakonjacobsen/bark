import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import defaultStyles from "../../styles/screens";
import SearchSvg from "../svg/SearchSvg";

const screenHeight = Dimensions.get('window').height;

export default function PrevSearchSection(props:{prevSearch:string[]}) {


  return (
      <View>
        <View style={emptyStyle.pictureWrapper}>
          <Image source={require('../../assets/gif/search-dog.gif')} style={emptyStyle.picture}/>
        </View>
        <View style={[emptyStyle.prevSearchPanel]}>
          <View style={[defaultStyles.sectionHeader]}>
            <Text style={[defaultStyles.sectionHeaderText]}>Tidligere søk</Text>
          </View>
          {props.prevSearch.map((search, index) => (
            <View key={index} style={[emptyStyle.prevSearch]}>
              <View style={defaultStyles.svgContainer}>
                <SearchSvg/>
              </View>
              <Text style={[emptyStyle.prevSearchText]}>{search}</Text>
            </View>
          ))}
        </View>
      </View>
  );
}

const emptyStyle = StyleSheet.create({
  pictureWrapper:{
    width: '100%',
    aspectRatio: 1.1,
    alignItems:'center',
    justifyContent: 'center',
  },
  picture:{
    height: '60%',
    aspectRatio: 1,
  },
  prevSearchPanel:{
    display: 'flex'
  },
  prevSearch:{
    width: '100%',
    height: screenHeight/20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  prevSearchText:{
    paddingLeft: '5%',
    fontSize: 20,
    color:'#767676'
  }
});