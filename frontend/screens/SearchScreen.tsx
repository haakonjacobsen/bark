import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import MediumCard from "../components/cards/MediumCard";
import {PostProps} from "../types/PostProps";
import {MockPostData} from "../assets/mock/data/MockPostData";
import {Dimensions} from "react-native";
import FilterSvg from "../components/svg/FilterSvg";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SearchScreen() {
  // 1 = bigCard, 2 = mediumCard, 3 = listView, 4 = mapView
  const [displayType, changeDisplayType] = useState(1);
  const [keyword, changeKeyword] = useState("");
  const [filter, changeFilter] = useState({});
  const [searchResult, updateResult] = useState<PostProps[]>([]);

  useEffect(() => {
    getPosts()
  }, [filter,keyword]);

  async function getPosts() {
    const response = await fetch('http://localhost:5000/posts');
    console.log(response.json())
  }

  function getMorePosts() {
    console.log('Load more posts')
  }

  function postDisplay(type:number, postData:PostProps[]){
    if (type === 1){
      return(
        <ScrollView>
          {searchResult.map(post =>(
            <BigCard post={post} roundCorners={true}/>
          ))}
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        <View style={styles.gridView}>
          {MockPostData.map(post =>(
            <MediumCard post={post}/>
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
            <View style={[styles.searchBar, defaultStyles.shadowMedium]}>
              <Text style={styles.searchText}>Search...</Text>
            </View>
            <View style={[styles.filterPanel, defaultStyles.shadowMedium]}>
              <FilterSvg/>
            </View>
          </View>
          <View style={[styles.sortAndDisplay]}>
            <View style={[styles.displayPanel]}></View>
            <View style={[styles.sortPanel]}></View>
          </View>
        </View>
        {postDisplay(displayType, searchResult)}
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
    justifyContent: 'center'
  },
  sortAndDisplay:{
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  displayPanel:{
    backgroundColor: 'green',
    width: '25%',
    aspectRatio: 2
  },
  sortPanel:{
    backgroundColor: 'yellow',
    width: '25%',
    aspectRatio: 2
  }
});