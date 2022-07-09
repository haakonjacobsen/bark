import React, {useEffect} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {AuthProvider} from "../types/PostProps";
import buttonStyles from "../styles/buttonStyles";
import textStyles from "../styles/textStyles";
import svgStyles from "../styles/svgStyles";
import RegisterIconSvg from "../components/svg/Icons/RegisterIconSvg";
import LoginIconSvg from "../components/svg/Icons/LoginIconSvg";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/features/authSlice";

WebBrowser.maybeCompleteAuthSession();

const backgroundImg = require('../assets/image/background-login-blurred-1.png');

const AUTH_PROVIDERS:AuthProvider[] = [
  {
    'name': 'Facebook',
    'icon': 'facebook',
    'color': '#3b5998',
    'authLink': 'https://facebook.com/auth',
    'provider': Facebook
  },
  {
    'name': 'Apple',
    'icon': 'apple',
    'color': '#000000',
    'authLink': 'https://apple.com/auth',
    "provider": Google
  },
  {
    'name': 'Google',
    'icon': 'google',
    'color': '#dd4b39',
    'authLink': 'https://google.com/auth',
    'provider': Google
  },
];

const Tab = createBottomTabNavigator();

//@ts-ignore
function LoginScreen({navigation}) {
  const dispatch = useDispatch()

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '402496035614-6snueitr0fh4c7cinu89ehv7ub0qmvqa.apps.googleusercontent.com',
    iosClientId: '402496035614-2ldjfguahecdlhahlo751oj41ar22l1j.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  async function getUserData(accessToken: string | undefined) {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}`}
    });
    userInfoResponse.json().then(data => {
      console.log(data.accessToken);
    });
  }

  useEffect(() => {
    if (response?.type === 'success') {
      console.log('response: ', response.authentication?.accessToken)
      dispatch(loginUser(response.authentication?.accessToken))
    }
  }, [response]);

  return (
  <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.image}>
    <View style={styles.loginRegisterPanel}>
      <Text style={styles.barkHeader}>Login</Text>
      <View style={styles.buttonList}>
        {Object.entries(AUTH_PROVIDERS).map(([key,v]) => {
          return (
            <View style={{marginBottom:20}}>
              <FontAwesome.Button
                key={key}
                disabled={!request}
                name={v.icon}
                size={25}
                iconStyle={{width:30}}
                backgroundColor={v.color}
                onPress={() => promptAsync()}
              >
                <Text style={{color:"white", fontWeight:'600'}}>
                  Login with {v.name}
                </Text>
              </FontAwesome.Button>
            </View>
          )
        })}
      </View>
      <View style={styles.authModeChangePanel}>
        <Text style={textStyles.infoText}>No user?</Text>
        <TouchableOpacity style={styles.loginRegisterButton} onPress={() => navigation.navigate('Register')}>
          <View style={svgStyles.maxHeightSvg}>
            <RegisterIconSvg/>
          </View>
          <Text>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
  )
}

//@ts-ignore
function RegisterScreen({navigation}) {
    return(
      <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.image}>
        <View style={styles.loginRegisterPanel}>
          <Text style={styles.barkHeader}>Register</Text>
          <View style={styles.buttonList}>
            {Object.entries(AUTH_PROVIDERS).map(([key,v]) => {
              return (
                <View style={{marginBottom:20}}>
                  <FontAwesome.Button
                    key={key}
                    name={v.icon}
                    size={25}
                    iconStyle={{width:30}}
                    backgroundColor={v.color}
                    onPress={() => console.log('register with authprovider')}>
                    <Text style={{color:"white", fontWeight:'600'}}>
                      Register with {v.name}
                    </Text>
                  </FontAwesome.Button>
                </View>
              )
            })}
          </View>
          <View style={styles.authModeChangePanel}>
            <Text style={textStyles.infoText}>Already registered?</Text>
            <TouchableOpacity style={styles.loginRegisterButton} onPress={() => navigation.navigate('Login')}>
              <View style={svgStyles.maxHeightSvg}>
                <LoginIconSvg/>
              </View>
              <Text>Log in here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
  )
}

export default function AuthScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}/>
        <Tab.Screen name="Register" component={RegisterScreen} options={{
          headerShown: false,
          tabBarStyle: {display: 'none'}
        }}/>
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: '100%',
  },
  loginRegisterPanel:{
    marginTop:'10%',
    height:'100%',
    justifyContent:'space-between',
  },
  barkHeader: {
    color: "white",
    fontFamily: 'OleoScript_400Regular',
    fontSize: 70,
    paddingVertical: 30,
    width: '100%',
    textAlign:'center',
    textAlignVertical:'top'
  },
  buttonList: {
    alignSelf: 'center',
    width: '70%',
    flexGrow: 1,
    justifyContent:'center',
  },
  authModeChangePanel:{
    flex:1,
    alignItems:'center'
  },
  loginRegisterButton:{
    ...buttonStyles.button,
    backgroundColor:'white',
  },
  userInfo:{
    flex: 1
  }
});