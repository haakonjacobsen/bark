import {StyleSheet, View} from "react-native";
import React from "react";
import {Dimensions} from "react-native";
import FilterAddedIcon from "../elements/FilterAddedIcon";
import {FilterState} from "../../types/PostProps";
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../../redux/features/searchSlice";
import {toggleCertifiedBreeders} from "../../redux/features/filterSlice";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function FiltersAddedPanel(props:{filter:FilterState}) {
    const dispatch = useDispatch();
    const toggleBreeders = () => {dispatch(toggleCertifiedBreeders())};

    return (
        <View style={styles.filtersAdded}>
            {props.filter.certifiedBreeders?<FilterAddedIcon name={"Certified"}/>:null}
            {props.filter.onlyPuppies?<FilterAddedIcon name={"Puppies"}/>:null}
            {props.filter.myFavorites?<FilterAddedIcon name={"Favourites"}/>:null}
        </View>
    );
}

const styles = StyleSheet.create({
    filtersAdded:{
        height: screenHeight/20,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row'
    }
});