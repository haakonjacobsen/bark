import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import MediumCard from "../components/cards/MediumCard";
import {PostProps} from "../types/PostProps";
import {Dimensions} from "react-native";
import FilterSvg from "../components/svg/FilterSvg";
import DogSvg from "../components/svg/DogSvg";
import SearchSvg from "../components/svg/SearchSvg";
import { Searchbar } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SearchScreen() {
  // 1 = bigCard, 2 = mediumCard, 3 = listView, 4 = mapView
  const [displayType, changeDisplayType] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, changeFilter] = useState({});
  const [searchResult, updateResult] = useState<PostProps[]>([]);
  const [prevSearch, updatePrevSearch] = useState<String[]>([
    'Retriver', 'Flatcouated Retriver', 'Stuff', 'Things', 'More Stuff', 'Retriver', 'Flatcouated Retriver', 'Stuff', 'Things', 'More Stuff']);

  useEffect(() => {
    getPostsQuery(searchQuery, filter)
  }, [filter, searchQuery]);

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);


  function getPostsQuery(query:string, filter:Object) {
    try{
      if (query === '') {
        fetch('http://192.168.0.15:5000/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
          .then(response => response.json())
          .then(json => updateResult(json))
      } else {
        fetch(`http://192.168.0.15:5000/posts/search/${query}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
          .then(response => response.json())
          .then(json => updateResult(json))
      }
    } catch (err){
      console.log('ERROR'+ err)
    }
  }

  function setDisplayType(){
    if(displayType == 2){
      changeDisplayType(1)
    }
    else {
      changeDisplayType(2)
    }
  }

  function postDisplay(type:number, postData:PostProps[]){
    if (type === 1){
      return(
        <ScrollView>
          {searchResult.map((post, index) =>(
            <BigCard key={index} post={post} roundCorners={true}/>
          ))}
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        <View style={styles.gridView}>
          {searchResult.map((post, index) =>(
            <MediumCard key={index} post={post}/>
          ))}
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView>
      <View style={defaultStyles.defScreen}>
        <View style={[styles.searchAndFilterPanel]}>
          <View style={[styles.searchHeader]}>
            <View style={styles.searchBar}>
              <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>
            <TouchableOpacity style={[styles.filterPanel, defaultStyles.shadowMedium]} onPress={() => updateResult([])}>
              <FilterSvg/>
            </TouchableOpacity>
          </View>
          {searchResult.length !== 0 ?
            <View style={[styles.sortAndDisplay]}>
              <TouchableOpacity style={[styles.displayPanel, defaultStyles.shadowMedium]} onPress={setDisplayType}>
                <View style={[styles.displayPanelIcon]}>
                  <DogSvg/>
                </View>
                <View style={[styles.displayPanelTextContainer]}>
                  <Text style={[styles.displayPanelText]}>Rute</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sortPanel, defaultStyles.shadowMedium]}>
                <View style={[styles.displayPanelIcon]}>
                  <DogSvg/>
                </View>
                <View style={[styles.displayPanelTextContainer]}>
                  <Text style={[styles.displayPanelText]}>I nærheten</Text>
                </View>
              </TouchableOpacity>
            </View>: null}
        </View>
        {searchResult.length === 0 ?
          // Blank search screen
            <ScrollView >
              <View style={[emptyStyle.container]}>
                <Image source={require('../assets/gif/search-dog.gif')} style={emptyStyle.picture}/>
                <View style={[emptyStyle.prevSearchPanel]}>
                  <View style={[defaultStyles.sectionHeader]}>
                    <Text style={[defaultStyles.sectionHeaderText]}>Tidligere søk</Text>
                  </View>
                  <View>
                    {prevSearch.map((search, index) => (
                      <View key={index} style={[emptyStyle.prevSearch]}>
                        <SearchSvg/>
                        <Text style={[emptyStyle.prevSearchText]}>{search}</Text>
                      </View>
                      ))}
                  </View>
                </View>
              </View>
            </ScrollView>:
          postDisplay(displayType, searchResult)
        }
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  gridView: {
    display: 'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  searchAndFilterPanel:{
    height: screenHeight/5,
    width: '100%',
    marginTop: 20,
  },
  searchHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    height: '50%',
    display: "flex",
    flexDirection: 'row',
  },
  searchBar:{
    backgroundColor: '#F9F9F9',
    flexGrow: 1,
    height: '100%',
    marginRight: 20,
    borderRadius: 5,
    justifyContent: "center"
  },
  searchText:{
    marginLeft: 25,
    color: '#A1A1A1',
    fontSize: 25,
  },
  filterPanel:{
    backgroundColor: '#F9F9F9',
    height: '100%',
    aspectRatio: 1,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortAndDisplay:{
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  displayPanel:{
    backgroundColor: '#FFFFFF',
    width: '30%',
    height: (screenWidth-40)/8,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderTopLeftRadius: 0
  },
  displayPanelIcon:{
    height: '100%',
    aspectRatio: 1
  },
  displayPanelTextContainer:{
    flex: 1,
    marginLeft: '5%'
  },
  displayPanelText:{
    fontSize: 15,
    color: '#717171',
    fontWeight: '600'
  },
  sortPanel:{
    backgroundColor: '#FFFFFF',
    width: '35%',
    height: (screenWidth-40)/8,
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderTopRightRadius: 0
  },
  sortPanelIcon:{
    height: '100%',
    aspectRatio: 1
  }
});

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