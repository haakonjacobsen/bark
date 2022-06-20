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
import * as SecureStore from 'expo-secure-store';

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
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '402496035614-6snueitr0fh4c7cinu89ehv7ub0qmvqa.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  async function getUserData(accessToken: string | undefined) {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}`}
    });
    userInfoResponse.json().then(data => {
      console.log(data);
    });
  }

  async function setCredentials(key: string, value: string|undefined) {
    if (key == null || value == null) {
      if (typeof value === "string") {
        await SecureStore.setItemAsync(key, value);
      }
    } else {
      console.log('key or value is null');
    }
  }

  async function getValueFor(key: string) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      console.log('response: ', response.authentication?.accessToken);
      setCredentials('accessToken', response.authentication?.accessToken);
      const { authentication } = response;
      console.log(getUserData(response.authentication?.accessToken));
      console.log(getValueFor('accessToken'));
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
                onPress={() => {
                  promptAsync();
                }}
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

export default function Auth() {
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
  }
});