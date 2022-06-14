import {StyleSheet} from "react-native";
import defaultStyles from "./screens";

const buttonStyles = StyleSheet.create({
    roundButton:{
        borderRadius: 1000,
        backgroundColor: '#FBFDFF',
        height: '100%',
        aspectRatio: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    button :{
        ...defaultStyles.shadowMedium,
        borderRadius: 10,
        padding: 10,
        flexDirection:'row',
        alignItems:'center',
        width:"70%",
        height:50
    }
});

export default buttonStyles