import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import React, {Dispatch} from "react";
import defaultStyles from "../../styles/screens";
import {Dimensions} from "react-native";
import CloseSvg from "../svg/CloseSvg";
import {RootState} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {
    resetDogBreeds,
    toggleCertifiedBreeders,
    toggleFavorites,
    togglePuppies,
    updatePriceInterval
} from "../../redux/features/filterSlice";

// @ts-ignore
export default function FilterAddedIcon(props:{name:string}) {
    const dispatch = useDispatch();
    const price = useSelector((state:RootState) => state.filter.priceInterval);
    const dogBreeds = useSelector((state:RootState)=> state.filter.dogBreeds)

    function removeFilter(filterName:string){
        if (filterName === 'Puppies') return dispatch(togglePuppies());
        else if (filterName === 'Certified') return dispatch(toggleCertifiedBreeders());
        else if (filterName === 'Favorite') return  dispatch(toggleFavorites());
        else if (filterName === 'Price') return dispatch(updatePriceInterval([0,26000]));
        else if (filterName === 'Breeds') return dispatch(resetDogBreeds());
    }

    /*Returns the correct label text for the filter tags of breeds, and price range*/
    function getFilterText(name:string) {
        if (name === 'Price') return <Text>{`kr ${price[0]}-${price[1]}`}</Text>
        else if (name === 'Breeds' && dogBreeds.length > 1) return <Text>'Breeds'</Text>;
        else return <Text>dogBreeds[0]</Text>;
    }

    return (
        <View style={[styles.container, defaultStyles.shadowMedium]}>
            <TouchableOpacity
                style={defaultStyles.svgContainer}
                onPress={() => removeFilter(props.name)}>
                <CloseSvg/>
            </TouchableOpacity>
            {/*Checking the price twice in getFilter, need a more efficient method*/}
            {(props.name === 'Price' || props.name ==='Breeds') ?
                getFilterText(props.name):<Text>{props.name}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 5,
        marginRight: 15,
        overflow:'hidden',
        backgroundColor: '#EDD994',
        borderRadius: 10,
    },
});