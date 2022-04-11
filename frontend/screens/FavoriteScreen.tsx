import React from 'react';
import { StyleSheet} from 'react-native';
import WikiScreen from "./WikiScreen";


export default function FavoriteScreen(props:{price:number; breed:string; age:number;}) {
  return (
    <WikiScreen toggleModalVisible={() => console.log('modal show')} breed={"Golden Retriver"} />
  );
}

const styles = StyleSheet.create({

});
