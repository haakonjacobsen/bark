import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import defaultStyles from "../../styles/screens";
import SearchSvg from "../svg/SearchSvg";

export default function PrevSearchSection(props:{prevSearch:string[]}) {


  return (
    <ScrollView>
      <View style={[emptyStyle.container]}>
        <Image source={require('../../assets/gif/search-dog.gif')} style={emptyStyle.picture}/>
        <View style={[emptyStyle.prevSearchPanel]}>
          <View style={[defaultStyles.sectionHeader]}>
            <Text style={[defaultStyles.sectionHeaderText]}>Tidligere søk</Text>
          </View>
          <View>
            {props.prevSearch.map((search, index) => (
              <View key={index} style={[emptyStyle.prevSearch]}>
                <SearchSvg/>
                <Text style={[emptyStyle.prevSearchText]}>{search}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const emptyStyle = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1
  },
  picture:{
    width: '100%',
    height: '30%'
  },
  prevSearchPanel:{
    display: 'flex'
  },
  prevSearch:{
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  prevSearchText:{
    marginLeft: '3%',
    fontSize: 20,
    color:'#767676'
  }
});