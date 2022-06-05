import React from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import defaultStyles from '../styles/screens';
import DogSvg from "../components/svg/DogSvg";
import { Dimensions } from 'react-native';
import StatBar from "../components/elements/StatBar";
import BreedStat from "../components/elements/BreedStat";
import WikiTextPart from "../components/elements/WikiTextPart";
import PostNearbyList from "../components/navBar/PostNearbyList";
import ArrowSvg from "../components/svg/ArrowSvg";
import buttonStyles from "../styles/buttonStyles";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// @ts-ignore
export default function WikiScreen({route}) {
  const { dogBreed } = route.params;

  const mockWikiData = {
    stats: {
      activityLevel: 3,
      cooperation: 5,
      size: 4,
      grooming: 2
    }, info:{
      history: "Golden retriever kommer fra grensetraktene mellom England og Skottland, og deres opprinnelse kan dateres fra slutten av 1800-tallet. Rasen har blitt til gjennom linjeavl på gule retrievere og tweed-water spaniel. Dette har resultert en rase med stor apporterings- og arbeids- lyst, som både er lydhør og intelligent, samtidig svært vennlig.",
      abilities: "Golden retrievere er en fleksibel rase som ofte blir brukt til apportering, viltspor, lydighet og bruksarbeid, samtidig som den også kan være en utmerket selskapshund i aktive familier. Rasen er intelligent, vennlig, tillitsfull og normalt flink med barn.",
      size: "Hannhunder blir 56-61 cm, mens tispene har en mankehøyde på 51-56 cm. Pelsen er glatt eller bølget med gode faner. Tett vannavstøtende underpels. Alle nyanser av gylden eller kremfarget, ikke rød eller mahogni. Noen få hvite hår i brystet tillatt.",
      health: "Golden retriever regnes som en sunn og frisk rase.  Det forekommer arvelige sykdommer på rasen, de fleste med lav frekvens.  De fleste individer blir ifølge statistikk over 10 år. Norsk Retrieverklubb har egne krav til avlsdyr. Informasjon om dette finner du på klubbens nettside (link til raseklubbens nettside finner du nedenfor). Foreldredyr skal være røntget på hofter, albuer og øyelyst. For øyesykdommen PRA finnes en DNA-test hvor resultatet registreres hos NKK.",
    }
  }

  return (
    <ScrollView style={defaultStyles.fullScreen}>
      <Text>{dogBreed}</Text>
      <ImageBackground source={require('../assets/mock/picture/wiki-picture-golden-retriver.jpg')} style={styles.breedPicture}>
      </ImageBackground>
      <View style={styles.screenContent}>
        <View style={styles.breedRow}>
          <View style={styles.breedSvg}>
            <DogSvg/>
          </View>
          <Text adjustsFontSizeToFit style={styles.breedText}>{dogBreed}</Text>
        </View>
        <View style={styles.BreedStats}>
          <BreedStat statName={"Aktivitetsnivå"} statNumber={1}/>
          <BreedStat statName={"Sammarbeid"} statNumber={1}/>
          <BreedStat statName={"Størrelse"} statNumber={2}/>
          <BreedStat statName={"Pelspleie"} statNumber={7}/>
        </View>
        <View style={styles.InfoSection}>
          <WikiTextPart title={"Historikk"} description={"Golden retriever kommer fra grensetraktene mellom England og Skottland, og deres opprinnelse kan dateres fra slutten av 1800-tallet. Rasen har blitt til gjennom linjeavl på gule retrievere og tweed-water spaniel. Dette har resultert en rase med stor apporterings- og arbeids- lyst, som både er lydhør og intelligent, samtidig svært vennlig."}/>
          <WikiTextPart title={"Historikk"} description={"Golden retriever kommer fra grensetraktene mellom England og Skottland, og deres opprinnelse kan dateres fra slutten av 1800-tallet. Rasen har blitt til gjennom linjeavl på gule retrievere og tweed-water spaniel. Dette har resultert en rase med stor apporterings- og arbeids- lyst, som både er lydhør og intelligent, samtidig svært vennlig."}/>
          <WikiTextPart title={"Historikk"} description={"Golden retriever kommer fra grensetraktene mellom England og Skottland, og deres opprinnelse kan dateres fra slutten av 1800-tallet. Rasen har blitt til gjennom linjeavl på gule retrievere og tweed-water spaniel. Dette har resultert en rase med stor apporterings- og arbeids- lyst, som både er lydhør og intelligent, samtidig svært vennlig."}/>
          <WikiTextPart title={"Historikk"} description={"Golden retriever kommer fra grensetraktene mellom England og Skottland, og deres opprinnelse kan dateres fra slutten av 1800-tallet. Rasen har blitt til gjennom linjeavl på gule retrievere og tweed-water spaniel. Dette har resultert en rase med stor apporterings- og arbeids- lyst, som både er lydhør og intelligent, samtidig svært vennlig."}/>
        </View>
        <PostNearbyList title={"Relevante annonser"}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContent:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  breedPicture:{
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  breedRow:{
    display: "flex",
    flexDirection:'row',
    width: '100%',
    aspectRatio: 5,
  },
  breedSvg: {
    width: '20%',
    marginRight: 10,
  },
  arrowSvg: {
    width: '5%',
  },
  breedText:{
    fontSize: 22,
    fontWeight: '700',
    flex: 1,
    color: '#616161',
    alignSelf: "center"
  },
  BreedStats:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  InfoSection:{
  },
  InfoPart:{

  },
  InfoHeader:{
    fontSize: 16,
    color:'#576071',
    fontWeight:'500',
    marginBottom: 5
  },
  InfoDescription:{
    fontSize: 15,
    fontWeight: '300'
  },
  closeButton:{
    ...buttonStyles.roundButton,
    position: 'absolute',
    top: 40,
    left: 20,
    height: 40,
    padding: 8,
    aspectRatio: 1,
  }
});
