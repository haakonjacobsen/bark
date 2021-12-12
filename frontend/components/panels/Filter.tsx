import {StyleSheet, Switch, View, Text, TouchableOpacity, Dimensions} from "react-native";
import React, {useState} from "react";
import defaultStyles from "../../styles/screens";
import {toggleCertifiedBreeders, toggleFavorites, togglePuppies, updatePriceInterval} from "../../redux/features/filterSlice";
import FilterSvg from "../svg/FilterSvg";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
// @ts-ignore
import RangeSlider from 'rn-range-slider';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import CloseCrossSvg from "../svg/CloseCrossSvg";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Filter(props:{show:boolean, toggleFilter: any}) {
    const filter = useSelector((state:RootState) => state.filter);
    const dispatch = useDispatch();
    const multiSliderValuesChange = (values: React.SetStateAction<number[]>) => {
        dispatch(updatePriceInterval(values));
    };

    if (!props.show) {
        return (
            <View style={[styles.filterButton, defaultStyles.svgContainer, defaultStyles.shadowMedium]}>
                <TouchableOpacity onPress={() => props.toggleFilter(!props.show)}>
                    <FilterSvg/>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={[styles.filterPanel, defaultStyles.shadowMedium]}>
            <View style={styles.filterPanelHeader}>
                <TouchableOpacity style={[styles.filterButton]} onPress={() => props.toggleFilter(!props.show)}>
                    <CloseCrossSvg/>
                </TouchableOpacity>
                <View style={{flexDirection:"row", alignItems:'center'}}>
                    <Text style={{fontSize: 20, fontWeight:"400", color:'#717171'}}>Filter</Text>
                    <TouchableOpacity style={[styles.filterButton]} onPress={() => props.toggleFilter(!props.show)}>
                        <FilterSvg/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.filterOptions}>
                <View style={[styles.filterOption, styles.switchOption]}>
                    <Text style={styles.optionText}>My favourites</Text>
                    <Switch
                        trackColor={{ false: "#F0F0F0", true: "#EDD994" }}
                        thumbColor={filter.myFavorites ? "#FAFAFA" : "#FAFAFA"}
                        ios_backgroundColor="#F0F0F0"
                        onValueChange={() => {dispatch(toggleFavorites())}}
                        value={filter.myFavorites}
                    />
                </View>
                <View style={[styles.filterOption, styles.switchOption]}>
                    <Text style={styles.optionText}>Show puppies only</Text>
                    <Switch
                        trackColor={{ false: "#F0F0F0", true: "#EDD994" }}
                        thumbColor={filter.myFavorites ? "#FAFAFA" : "#FAFAFA"}
                        ios_backgroundColor="#F0F0F0"
                        onValueChange={() => {dispatch(togglePuppies())}}
                        value={filter.onlyPuppies}
                    />
                </View>
                <View style={[styles.filterOption, styles.switchOption]}>
                    <Text style={styles.optionText}>Only certified breeders ☑️</Text>
                    <Switch
                        trackColor={{ false: "#F0F0F0", true: "#EDD994" }}
                        thumbColor={filter.myFavorites ? "#FAFAFA" : "#FAFAFA"}
                        ios_backgroundColor="#F0F0F0"
                        onValueChange={() => {dispatch(toggleCertifiedBreeders())}}
                        value={filter.certifiedBreeders}
                    />
                </View>
                <View style={[styles.filterOption, styles.sliderOption]}>
                    <Text style={[styles.optionText, styles.sliderOptionText]}>Price</Text>
                    <MultiSlider
                        values={filter.priceInterval}
                        onValuesChange={multiSliderValuesChange}
                        step={1000}
                        min={0}
                        max={26000}
                        selectedStyle={{
                            height: 6,
                            backgroundColor: '#EDD994'
                        }}
                    />
                    <View style={styles.sliderOptionNumbers}>
                        <Text style={styles.sliderOptionNumberText}>
                            {filter.priceInterval[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        </Text>
                        <Text style={styles.sliderOptionNumberText}>
                            {filter.priceInterval[1]>25000?"25 000+":filter.priceInterval[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filterPanel:{
        borderRadius: 10,
        backgroundColor: '#F9F9F9',
        width: '100%',
        position: "absolute",
    },
    filterButton:{
        backgroundColor: '#F9F9F9',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 5
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
    filterPanelHeader:{
        height: 50,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: '#717171',
    },
    filterOptions:{
        display: "flex",
        height: screenHeight/2,
        paddingLeft: 10,
        paddingRight: 10
    },
    filterOption:{
        display: 'flex',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
    },
    optionText:{
        color: '#717171',
        fontSize: 20,
        fontWeight: "400",
    },
    switchOption:{
        alignItems: 'center',
        flexDirection: 'row',
        height: '18%',
        justifyContent: "space-between",
    },
    sliderOption:{
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        flexDirection: 'column',
    },
    sliderOptionText:{
        alignSelf:'flex-start'
    },
    sliderOptionNumbers:{
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight: 20,
        paddingLeft: 20,
    },
    sliderOptionNumberText:{
        color: '#717171',
        fontSize: 20,
        textAlign:'center',
    }
});