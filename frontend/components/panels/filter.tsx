import {StyleSheet, Switch, View, Text, TouchableOpacity, Dimensions} from "react-native";
import React, {useState} from "react";
import DogSvg from "../svg/DogSvg";
import defaultStyles from "../../styles/screens";
import {toggleCertifiedBreeders, toggleFavorites, togglePuppies} from "../../redux/features/filterSlice";
import FilterSvg from "../svg/FilterSvg";
import {useDispatch, useSelector} from "react-redux";
import { Switch as PaperSwitch } from 'react-native-paper'
import {RootState} from "../../redux/store";
import {setSearchQuery} from "../../redux/features/searchSlice";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Filter() {
    const [showFilter, toggleFilter] = useState(false);
    const filter = useSelector((state:RootState) => state.filter);
    const dispatch = useDispatch();


    if (showFilter) {
        return (
            <View>
                <TouchableOpacity style={[styles.filterButton, defaultStyles.shadowMedium]} onPress={() => toggleFilter(!showFilter)}>
                    <FilterSvg/>
                </TouchableOpacity>
            </View>
    )}
    return (
        <View style={[styles.filterPanel, defaultStyles.shadowMedium]}>
            <View style={styles.filterPanelHeader}>
                <TouchableOpacity style={[styles.filterButton]} onPress={() => toggleFilter(!showFilter)}>
                    <FilterSvg/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterButton]} onPress={() => toggleFilter(!showFilter)}>
                    <FilterSvg/>
                </TouchableOpacity>
            </View>
            <View style={styles.filterOptions}>
                <View style={styles.filterOptionSwitch}>
                    <Text style={styles.filterOptionText}>Mine favoritter</Text>
                    <Switch
                        trackColor={{ false: "#F0F0F0", true: "#EDD994" }}
                        thumbColor={filter.myFavorites ? "#FAFAFA" : "#FAFAFA"}
                        ios_backgroundColor="#F0F0F0"
                        onValueChange={() => {dispatch(toggleFavorites())}}
                        value={filter.myFavorites}
                    />
                    <PaperSwitch color={'#EDD994'} value={filter.myFavorites} onValueChange={() => {dispatch(toggleFavorites())}} />
                </View>
                <View style={styles.filterOptionSwitch}>
                    <Text style={styles.filterOptionText}>Show puppies only</Text>
                    <PaperSwitch color={'#EDD994'} value={filter.onlyPuppies} onValueChange={() => {dispatch(togglePuppies())}} />
                </View>
                <View style={styles.filterOptionSwitch}>
                    <Text style={styles.filterOptionText}>Only certified breeders ☑️</Text>
                    <PaperSwitch color={'#EDD994'} value={filter.certifiedBreeders} onValueChange={() => {dispatch(toggleCertifiedBreeders())}} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filterButton:{
        backgroundColor: '#F9F9F9',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterButtonActive:{
        backgroundColor: '#F9F9F9',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterPanel:{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#F9F9F9',
        width: '100%',
        position: "absolute",
        marginTop: 20,
    },
    filterPanelHeader:{
        height: 45,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    filterOptions:{
        display: "flex",
        height: screenHeight/2,
    },
    filterOptionSwitch:{
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: '15%',
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10
    },
    filterOptionText:{
        color: '#717171',
        fontSize: 20,
        fontWeight: "500"
    }
});