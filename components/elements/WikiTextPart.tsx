import * as React from "react"
import {StyleSheet, Text, View} from "react-native";


export default function WikiTextPart(props:{title:string, description:string}) {
  return (
    <View style={styles.InfoPart}>
      <Text style={styles.InfoHeader}>{props.title}</Text>
      <Text style={styles.InfoDescription}>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPart:{
    marginBottom: 30,
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
  }
});