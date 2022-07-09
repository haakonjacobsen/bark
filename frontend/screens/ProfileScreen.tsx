
import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../styles/screens';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {logoutUser} from "../redux/features/authSlice";

export default function ProfileScreen() {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken)
  const dispatch = useDispatch()

  function testAccessToken() {
    console.log(accessToken)
  }

  return (
    <View style={styles.defScreen}>
      <Text>{accessToken}</Text>
      <Button title={'Test Access Token'} onPress={testAccessToken} />
      <Button title={'Sign out'} onPress={() => dispatch(logoutUser())} />
    </View>
  );
}