
import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../styles/screens';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {logoutUser} from "../redux/features/authSlice";

type UserData = {
  id?: string
  email?:string
  verified_email?: string
  name: string
  given_name?: string
  family_name?: string
  picture?: string
  locale?: string
}


export default function ProfileScreen() {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken)
  const dispatch = useDispatch()
  const [userData, _setUserData] = React.useState<UserData>({name:'loading...'})

  const getUserData = async (accessToken: string | undefined) => {
    console.log('Access token', accessToken)
    try {
      let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}`}
      });
      console.log('userInfoResponse: ', userInfoResponse)
      userInfoResponse.json().then(data => {
        console.log(data);
      });
    } catch (error) {
      console.log("App.js 12 | error", error);
    }
  }

  return (
    <View style={styles.defScreen}>
      <Text>{accessToken}</Text>
      <Text>{userData.name}</Text>
      <Button title={'Test Access Token'} onPress={() => getUserData} />
      <Button title={'Sign out'} onPress={() => dispatch(logoutUser())} />
    </View>
  );
}