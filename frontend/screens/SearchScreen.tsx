import React, {useEffect, useState} from 'react';
import {ScrollView, Dimensions, SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import MediumCard from "../components/cards/MediumCard";
import ListCard from "../components/cards/ListCard";
import {PostProps} from "../types/PostProps";
import PrevSearchSection from "../components/sections/PrevSearchSection";
import SearchAndFilterPanel from "../components/panels/SearchAndFilterPanel";
import NoPostSection from "../components/sections/NoPostSection";
import MapView from 'react-native-maps';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ALL_POST_QUERY = `
{
  getAllPost(first:2) {
    price
    dogBreed
    id
    dogAge
    description
  }
}
`


function createSearchPostQuery(queryText: string) {
  return `
{
  getSearchPost(input: {searchKeyword: "${queryText}"}) {
    id
    price
    dogBreed
    dogAge
    postDate
    description
  }
}
`
}

export default function SearchScreen() {
  // 1 = bigCard, 2 = mediumCard, 3 = listView, 4 = mapView
  const [displayType, changeDisplayType] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, changeFilter] = useState({});
  const [searchResult, updateResult] = useState<PostProps[]>([]);
  const [prevSearch, updatePrevSearch] = useState<string[]>([
    'Retriver', 'Flatcouated Retriver', 'Stuff', 'Things', 'More Stuff', 'Retriver', 'Flatcouated Retriver', 'Stuff', 'Things', 'More Stuff']);

  useEffect(() => {
    //getPostsQuery(searchQuery, filter);
    getPostData(searchQuery, filter);
    console.log();
  }, [filter, searchQuery]);


  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  async function getPostData(query:string, filter:Object) {
    try{
      const postData = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json',},
        body: JSON.stringify({query: createSearchPostQuery(query)})
      }).then(res => res.json()).then(data => {return data.data.getSearchPost});
      updateResult(postData);
    }catch(err){
      console.log(err)
    }
  }

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
    else if(type === 2){
      return(
      <ScrollView>
        <View style={styles.gridView}>
          {searchResult.map((post, index) =>(
            <MediumCard key={index} post={post}/>
          ))}
        </View>
      </ScrollView>
      )
    }
    else if(type === 3) {
      return (
        <ScrollView>
          <View style={styles.gridView}>
            {searchResult.map((post, index) => (
              <ListCard key={index} post={post}/>
            ))}
          </View>
        </ScrollView>
      )
    }
    else (
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={defaultStyles.absScreenPart}>
        <SearchAndFilterPanel
          displayType={displayType}
          changeDisplayType={changeDisplayType}
          filter={filter}
          changeFilter={changeFilter}
          searchQuery={searchQuery}
          searchResult={searchResult}
          setSearchQuery={setSearchQuery}
          updateResult={updateResult}
        />
      </View>
      <ScrollView style={displayType === 4 ? {marginTop:0}:{marginTop:200}}>
       <View style={defaultStyles.defScreen}>
        <View style={{overflow:'visible'}}>
          {searchResult.length === 0 && searchQuery !== '' ?
            <NoPostSection />:
            (searchResult.length === 0 ?
            <PrevSearchSection prevSearch={prevSearch}/>:
            postDisplay(displayType, searchResult))
          }
        </View>
       </View>
      </ScrollView>
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
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: screenWidth,
    height: screenHeight,
  },
});