import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, { Path } from "react-native-svg";
import DogSvg from "../svg/DogSvg"
import {Searchbar} from "react-native-paper";
import defaultStyles from "../../styles/screens";
import FilterSvg from "../svg/FilterSvg";
import {PostProps} from "../../types/PostProps";
import {useDispatch, useSelector} from "react-redux";
import {toggleCertifiedBreeders} from "../../redux/features/filterSlice";
import {setDisplayType, setSearchQuery} from "../../redux/features/searchSlice";
import {RootState} from "../../redux/store";
import Filter from "./filter";
import { Switch } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SearchAndFilterPanel() {
  //Redux
  const search = useSelector((state:RootState) => state.search);
  const dispatch = useDispatch();
  const onChangeSearch = (query: React.SetStateAction<string>) => {dispatch(setSearchQuery(query))};


  return (
    <View style={[styles.searchAndFilterPanel]}>
      <View style={[styles.searchHeader]}>
        <View style={styles.searchBar}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={search.searchQuery}
          />
        </View>
        <Filter/>
      </View>
      {search.searchResults.length !== 0 ?
        <View style={[styles.sortAndDisplay]}>
          <TouchableOpacity style={[styles.displayPanel, defaultStyles.shadowMedium]} onPress={() => dispatch(setDisplayType())}>
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
  );
}


const styles = StyleSheet.create({
  searchAndFilterPanel:{
    zIndex: 10,
    position:'absolute',
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