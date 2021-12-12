import {ScrollView, StyleSheet, View} from "react-native";
import React from "react";
import {Dimensions} from "react-native";
import FilterAddedIcon from "../elements/FilterAddedIcon";
import {FilterState} from "../../types/PostProps";
import {useDispatch} from "react-redux";
import {toggleCertifiedBreeders} from "../../redux/features/filterSlice";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function FiltersAddedPanel(props:{filter:FilterState}) {
    const dispatch = useDispatch();
    const toggleBreeders = () => {dispatch(toggleCertifiedBreeders())};

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.filtersAdded}>
            <View style={{flexDirection:'row'}}>
            {props.filter.certifiedBreeders ? <FilterAddedIcon name={'Certified'}/>:null}
            {props.filter.onlyPuppies ? <FilterAddedIcon name={'Puppies'}/>:null}
            {props.filter.myFavorites ? <FilterAddedIcon name={'Favorite'}/>:null}
            {(props.filter.priceInterval[0] !== 0 || props.filter.priceInterval[1] !== 26000) ?
                <FilterAddedIcon name={'Price'}/>:null}
            {props.filter.dogBreeds.length > 0 ? <FilterAddedIcon name={'Breeds'}/>:null}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    filtersAdded:{
        height: screenHeight/20,
        marginTop:5,
        borderColor: 'black',
        flexDirection: 'row',
        overflow:'visible'
    }
});