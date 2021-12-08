import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React, {Dispatch} from "react";
import defaultStyles from "../../styles/screens";
import {Dimensions} from "react-native";
import CloseSvg from "../svg/ColseSvg";
import {RootState} from "../../redux/store";
import {FilterState} from "../../types/PostProps";
import {setDisplayType} from "../../redux/features/searchSlice";
import {useDispatch} from "react-redux";
import {toggleCertifiedBreeders} from "../../redux/features/filterSlice";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// @ts-ignore
export default function FilterAddedIcon(props:{name:string}) {
    const dispatch = useDispatch();

    return (
        <View style={[styles.container, defaultStyles.shadowMild]}>
            <TouchableHighlight
                activeOpacity={0}
                underlayColor="#DDDDDD"
                style={styles.iconContainer}
                onPress={() => dispatch(toggleCertifiedBreeders())}>
                <CloseSvg/>
            </TouchableHighlight>
            <Text>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 5,
        marginRight: 15,
        height: '100%',
        maxWidth: screenWidth/3,
        backgroundColor: '#EDD994',
        borderRadius: 10,
    },
    iconContainer: {
        height: '75%',
        aspectRatio: 1,
        marginRight: 8,
    }
});