import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DogSvg from "../svg/DogSvg"
import {Searchbar} from "react-native-paper";
import defaultStyles from "../../styles/screens";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayType, setSearchQuery} from "../../redux/features/searchSlice";
import {RootState} from "../../redux/store";
import Filter from "./Filter";
import FiltersAddedPanel from "./FiltersAddedPanel";
import PostSvg from "../svg/PostSvg";
import GridSvg from "../svg/GridSvg";
import ListSvg from "../svg/ListSvg";
import MapSvg from "../svg/MapSvg";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SearchAndFilterPanel() {
  const [showFilter, toggleFilter] = useState(false);

  const search = useSelector((state:RootState) => state.search);
  const filter = useSelector((state:RootState) => state.filter);
  const dispatch = useDispatch();
  const onChangeSearch = (query: React.SetStateAction<string>) => {dispatch(setSearchQuery(query))};

  const displayType:any = {
    1: 'Post',
    2: 'Grid',
    3: 'List',
    4: 'Map'
  }

  function getIconFilter(displayType:number){
    if(displayType === 1) return <PostSvg/>
    else if (displayType === 2) return <GridSvg/>
    else if (displayType === 3) return <ListSvg/>
    else if (displayType === 4) return <MapSvg color={false}/>
    else return <DogSvg/>
  }

  return (
    <View style={search.displayType === 4 ? styles.searchAndFilterPanelMap:styles.searchAndFilterPanel}>
      <View style={[styles.searchHeader]}>
        <View style={styles.searchBar}>
          {!showFilter ?<Searchbar
              style={{maxHeight:'100%', minHeight:'100%'}}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={search.searchQuery}
          />:null}
        </View>
        <Filter show={showFilter} toggleFilter={toggleFilter}/>
      </View>
      {(filter.onlyPuppies || filter.myFavorites || filter.certifiedBreeders ||
      !(JSON.stringify(filter.priceInterval) === JSON.stringify([0,26000])) || filter.dogBreeds.length > 0) ?
          <FiltersAddedPanel filter={filter}/>:null
      }
      {search.searchResults.length !== 0 || search.displayType === 4 ?
        <View style={[styles.sortAndDisplay]}>
          <TouchableOpacity style={[styles.displayPanel, defaultStyles.shadowMedium]} onPress={() => dispatch(setDisplayType())}>
            <View style={defaultStyles.svgContainer}>
              {getIconFilter(search.displayType)}
            </View>
            <Text style={[styles.displayPanelText]}>{displayType[search.displayType]}</Text>
          </TouchableOpacity>
          {search.displayType !== 4 ?
          <TouchableOpacity style={[styles.sortPanel, defaultStyles.shadowMedium]}>
            <View style={defaultStyles.svgContainer}>
              <DogSvg/>
            </View>
            <Text style={[styles.displayPanelText]}>I nærheten</Text>
          </TouchableOpacity>: null}
        </View>: null}
    </View>
  );
}


const styles = StyleSheet.create({
  searchAndFilterPanel:{
    paddingTop: screenHeight/25,
    zIndex:100,
    marginTop: 20,
    display: 'flex',
    width: '100%',
    paddingHorizontal: 20,
    alignSelf: 'flex-start'
  },
  searchAndFilterPanelMap:{
    paddingTop: screenHeight/25,
    zIndex:100,
    marginTop: 20,
    display: 'flex',
    width: '100%',
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    position: "absolute"
  },
  searchHeader: {
    zIndex:105,
    minHeight: screenWidth/8,
    maxHeight: screenWidth/8,
    flexGrow: 1,
    display: "flex",
    flexDirection: 'row',
  },
  searchBar:{
    flexGrow: 1,
    height: '100%',
    marginRight: 15,
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
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  displayPanel:{
    backgroundColor: '#FFFFFF',
    height: (screenWidth-40)/10, //why? 40 = standard screen padding, 10
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderTopLeftRadius: 0
  },
  displayPanelText:{
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    color: '#717171',
    fontWeight: '600'
  },
  sortPanel:{
    backgroundColor: '#FFFFFF',
    width: '35%',
    height: (screenWidth-40)/10,
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
});