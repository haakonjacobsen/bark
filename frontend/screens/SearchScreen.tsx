import React, {useEffect, useState} from 'react';
import {ScrollView, Dimensions, SafeAreaView, StyleSheet, View, Button} from 'react-native';
import defaultStyles from '../styles/screens';
import BigCard from "../components/cards/BigCard";
import MediumCard from "../components/cards/MediumCard";
import ListCard from "../components/cards/ListCard";
import {PostProps, FilterState} from "../types/PostProps";
import PrevSearchSection from "../components/sections/PrevSearchSection";
import SearchAndFilterPanel from "../components/panels/SearchAndFilterPanel";
import NoPostSection from "../components/sections/NoPostSection";
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from "react-redux";
import { RootState } from '../redux/store';
import {addSearchResults, resetSearchResults, setSearchQuery} from "../redux/features/searchSlice";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function createSearchPostQuery(queryText: string, limit: number, offset: number) {
  return `
{
  getSearchPost(searchKeyword: "${queryText}", limit: ${limit}, offset: ${offset}) {
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
  const filter = useSelector((state:RootState) => state.filter);
  const search = useSelector((state:RootState) => state.search);
  const [prevSearch, updatePrevSearch] = useState<string[]>([
    'Retriver', 'Flatcouated Retriver', 'Stuff', 'Things', 'More Stuff',
    'Retriver', 'Flatcouated Retriver', 'Stuff', 'Things', 'More Stuff']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSearchResults());
  }, [filter, search.searchQuery]);

  async function getPostData(query:string, filter:Object) {
    try{
      const postData = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json',},
        body: JSON.stringify({query: createSearchPostQuery(query, 1, search.searchResults.length)})
      }).then(res => res.json());
      dispatch(addSearchResults(postData.data.getSearchPost));
      //updateResult(oldArray => [...oldArray, ...postData.data.getSearchPost]);
    } catch(err){
      console.log(err)
    }
  }

  function postDisplay(type:number, postData:PostProps[]){
    if (search.displayType === 1){
      return(
        <ScrollView>
          {postData.map((post, index) =>(
            <BigCard key={index} post={post} roundCorners={true}/>
          ))}
        </ScrollView>
      );
    }
    else if(search.displayType === 2){
      return(
      <ScrollView>
        <View style={styles.gridView}>
          {postData.map((post, index) =>(
            <MediumCard key={index} post={post}/>
          ))}
        </View>
      </ScrollView>
      )
    }
    else if(search.displayType === 3) {
      return (
        <ScrollView>
          <View style={styles.gridView}>
            {postData.map((post, index) => (
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
        <SearchAndFilterPanel/>
      </View>
      <ScrollView style={search.displayType === 4 ? {marginTop:0}:{marginTop:200}}>
       <View style={defaultStyles.defScreen}>
        <View style={{overflow:'visible'}}>
          {search.searchResults.length === 0 && search.searchQuery !== '' ?
            <NoPostSection />:
            (search.searchResults.length === 0 ?
            <PrevSearchSection prevSearch={prevSearch}/>:
            postDisplay(search.displayType, search.searchResults))
          }
          <Button title={"LoadMore"} onPress={() => getPostData(search.searchQuery, filter)}/>
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