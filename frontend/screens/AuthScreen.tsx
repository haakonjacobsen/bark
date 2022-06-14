import React from "react";
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

const backgroundImg = require('../assets/image/background-login-blurred-1.png');

const AUTH_PROVIDERS:AuthProvider[] = [
  {
    'name': 'Facebook',
    'icon': 'facebook',
    'color': '#3b5998',
    'authLink': 'https://facebook.com/auth'
  },
  {
    'name': 'Apple',
    'icon': 'apple',
    'color': '#000000',
    'authLink': 'https://apple.com/auth'
  },
  {
    'name': 'Google',
    'icon': 'google',
    'color': '#dd4b39',
    'authLink': 'https://twitter.com/auth'
  },
];

const Tab = createBottomTabNavigator();


function loginAuthProvider(authLink:string){
  console.log(`Logging in at ${authLink}`)
  // should open safari and do OAuth code flow
}

//@ts-ignore
function LoginScreen({navigation}) {
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
                name={v.icon}
                size={25}
                iconStyle={{width:30}}
                backgroundColor={v.color}
                onPress={() => loginAuthProvider(v.authLink)}>
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
                    onPress={() => loginAuthProvider(v.authLink)}>
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