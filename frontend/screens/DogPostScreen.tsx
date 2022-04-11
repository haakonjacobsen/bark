import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal, Button
} from 'react-native';
import {defaultTheme, palette} from "../styles/defaultTheme";
import DogButton from "../components/elements/DogButton";
import defaultStyles from "../styles/screens";
import {MockBreederData, MockPostData} from "../assets/mock/data/MockData";
import ArrowSvg from "../components/svg/ArrowSvg";
import buttonStyles from "../styles/buttonStyles";
import LinearGradient from 'react-native-linear-gradient';
import WikiScreen from "./WikiScreen";
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default function DogPostScreen() {
    const [showFullDescription, toggleFullDescription] = useState(false)
    const [post, setPost] = useState(MockPostData)
    const [breeder, setSeller] = useState(MockBreederData)
    const [modalVisible, toggleModalVisible] = useState(false)

    function getShortDescription(description:String){
        const maxLength = 30
        return description.split(' ').slice(0, maxLength).join(' ') + " ..."
    }

    return (
        <View style={{height:HEIGHT-85}}>
            <ScrollView >
                <Modal
                animationType={'slide'}
                visible={modalVisible}
                onRequestClose={() => toggleModalVisible(!modalVisible)}>
                    <WikiScreen toggleModalVisible={toggleModalVisible} breed={post.dogBreed}/>
                </Modal>
                <Image source={require('../assets/mock/picture/post-image.jpg')} style={styles.pictures}/>
                <View style={defaultStyles.defScreen}>
                    <View style={styles.breedInfo}>
                        <DogButton toggleModal={toggleModalVisible} dogBreed={post.dogBreed}/>
                        <Text style={styles.dogBreedHeader }>{post.dogBreed}</Text>
                    </View>
                    <View style={styles.postInformation}>
                        <Text>{post.price}</Text>
                        <Text>{breeder.verifiedBreeder ? "VERIFIED":"UNVERIFIED"}</Text>
                        <Text>{breeder.firstname}</Text>
                    </View>
                    <View style={styles.postDescription}>
                        <Text>{
                            showFullDescription ?
                                post.description
                                : getShortDescription(post.description)}
                        </Text>
                        <TouchableOpacity style={styles.arrowButton} onPress={() => toggleFullDescription(!showFullDescription)}>
                            <ArrowSvg direction={showFullDescription ? "UP":"DOWN"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.contactBreederPanel}>
                <TouchableOpacity style={styles.breederImage}/>
                <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Contact breeder</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pictures:{
        width: '100%',
        height: HEIGHT/3,
        backgroundColor: 'black'
    },
    breedInfo:{
        display: 'flex',
        marginVertical: 20,
        flexDirection: 'row',
        height: WIDTH/5,
        alignItems: 'center',
    },
    dogBreedHeader:{
        ...defaultTheme.textVariants.header,
        fontSize: 28,
        fontWeight:'500'
    },
    postInformation:{
        backgroundColor: palette.darkGray,
        height: 150,
        marginBottom: 20,
    },
    arrowButton:{
        ...buttonStyles.roundButton,
        marginTop: 5,
        height: 35,
        padding: 8,
        aspectRatio: 1,
    },
    textGradient:{
        //TODO: Make a white text gradient to cover short text only
    },
    postDescription:{
        alignItems: "center",
        marginBottom: 20,
    },
    contactBreederPanel:{
        position: 'absolute',
        width: '100%',
        height: 80,
        bottom: -5,
        backgroundColor: palette.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        padding: 15,
        flexDirection: "row"
    },
    breederImage:{
        borderRadius: 10000,
        height: '100%',
        aspectRatio: 1,
        backgroundColor: 'gray',
        marginRight: 20,
    },
    contactButton:{
        ...buttonStyles.button,
        flexGrow: 1,
        backgroundColor: palette.yellow1,
    },
    contactButtonText:{
        fontSize: 20,
        fontWeight: "500"
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },

});