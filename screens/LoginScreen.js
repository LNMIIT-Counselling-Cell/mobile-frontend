import React, { useState, useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { AuthContext } from '../components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getToken } from '../utils/Token';
import { useTheme } from '@react-navigation/native';
import { REACT_APP_PROD_URL, REACT_APP_WEB_CLIENT_ID, REACT_APP_ANDROID_CLIENT_ID, REACT_APP_IOS_CLIENT_ID } from '@env'

export default function LoginScreen({ navigation }) {

  const { colors } = useTheme()

  const { login, logout } = useContext(AuthContext)
  const [choice, setChoice] = useState("");

  const showAlert = (title, message, option) => {
    return Alert.alert(
      // the title of the alert dialog
      title,

      // the message you want to show up
      message,

      // buttons
      // On iOS there is no limit of how many buttons you can use, but on Android three is the maximum
      // If you're developing an app for both platforms, don't use more than three buttons
      [
        // the first button
        {
          text: option,
          onPress: () => setChoice(option),
        },

        // the second button
        // {
        //   text: "Disagree",
        //   onPress: () => setChoice("Disagree"),
        // },

        // the third button
        // {
        //   text: "I Dunno",
        //   onPress: () => setChoice("I do not know"),
        // },
      ]
    );
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.REACT_APP_WEB_CLIENT_ID,
      androidClientId: process.env.REACT_APP_ANDROID_CLIENT_ID,
      iosClientId: process.env.REACT_APP_IOS_CLIENT_ID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedIn()
  }, [])

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // let authUrl;

  // const createGoogleAuthLink = async () => {
  //   try {
  //     const request = await fetch("http://192.168.72.252:5000/createAuthLink", {
  //       method: "POST",
  //     });
  //     const response = await request.json();
  //     // window.location.href = response.url;
  //     console.log("createAuthLink ------ ", response);
  //     console.log("createAuthLink url------ ", response.url);
  //     const authUrl = response.url;
  //     // redirect()

  //     // const query = new URLSearchParams(new URL(authUrl));
  //     // console.log("handleTokenFromQueryParams query--- ", query);
  //     // const accessToken = query.getAll();
  //     // console.log("handleTokenFromQueryParams actok--- ", accessToken);
  //   } catch (error) {
  //     console.log("createAuthLink| error", error);
  //     // throw new Error("Issue with Login", error.message);
  //   }
  // };

  const redirect = async (authCode) => {
    try {
      const request = await axios.post(process.env.REACT_APP_PROD_URL + "handleGoogleRedirect", {
        code: authCode
      });
      const response = request;
      console.log("redirect received ---- ", response);
      const accessToken = response.data.accessToken;
      console.log("redirect received atk ---- ", accessToken);
      const refreshToken = response.data.refreshToken;
      console.log("redirect received rtk ---- ", refreshToken);
      const expirationDate = newExpirationDate();
      console.log(" expiration Date  ", expirationDate);
      if (accessToken && refreshToken) {
        AsyncStorage.setItem("accessToken", accessToken);
        AsyncStorage.setItem("refreshToken", refreshToken);
        AsyncStorage.setItem("expirationDate", JSON.stringify(expirationDate));
        let atk = await AsyncStorage.getItem("accessToken")
        let rtk = await AsyncStorage.getItem("refreshToken")
        let edt = await AsyncStorage.getItem("expirationDate")
        console.log("Access token updated successfully ", atk)
        console.log("Refresh token updated successfully ", rtk)
        console.log("expirationDate updated successfully ", edt)
        // setIsLoggedIn(true);
      }
      else {
        console.log("idhar log huyA HAI yaaaaar bc")
      }
    } catch (error) {
      console.log("redirect| error", error);
    }
  }

  const newExpirationDate = () => {
    var expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    return expiration;
  };

  const tok = async () => {
    try {
      const token = await getToken()
      console.log("accesstoken tok -------- ", token);
    } catch (error) {
      console.log("tok error", error);
    }
  }

  const checkRedirected = async (userInfo) => {
    try {
      const check = await AsyncStorage.getItem("isRedirected")
      console.log("check ------------ ", check)
      if (check === null || check === undefined) {
        console.log("Redirect true --- ", userInfo.serverAuthCode)
        redirect(userInfo.serverAuthCode)
        AsyncStorage.setItem("isRedirected", JSON.stringify(true))
      }
      else {
        console.log("Redirect false")
      }
    } catch (error) {
      console.error("check Redirect err --------- ", error)
    }
  }

  const signInFn = () => {
    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
        GoogleSignin.signIn().then((userInfo) => {
          let val = JSON.stringify(userInfo)
          console.log(val)
          login({ userInfo })
          console.log('1 done')
          // { cnt === 0 ? {redirect(userInfo.serverAuthCode)} :  }
          checkRedirected(userInfo)
          console.log('2 done')
          // redirect(userInfo.serverAuthCode)
          // tok()
        }).catch((error) => {
          console.log("ERROR IS: " + JSON.stringify(error));
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("ERROR IS: SIGN_IN_CANCELLED")
            showAlert("Alert!", "Google Sign In Cancelled", "Ok")
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log("ERROR IS: IN_PROGRESS")
            showAlert("Alert!", "In Progress", "Ok")
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log("ERROR IS: PLAY_SERVICES_NOT_AVAILABLE")
            showAlert("Alert!", "Google Play Services is not available. Please install.", "Ok")
          } else {
            // some other error happened
            console.log("ERROR IS: lnmiit id se aao bhai - ", error.message)
            showAlert("Alert!", "Login through LNMIIT ID only", "Ok")
          }
        })
      }
    }).catch((e) => {
      showAlert("Alert!", "Error - " + JSON.stringify(e), "Ok")
      console.log("ERROR IS: " + JSON.stringify(e));
    })
  }

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log("isSignedIn: " + isSignedIn);
    if (isSignedIn) {
      getCurrentUserInfo()
    } else {
      console.log('Please Login')
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      // const utok1 = await GoogleSignin.getTokens()
      // console.log('utok1 --- ', utok1);
      // const userTok = await GoogleSignin.clearCachedAccessToken(utok1.accessToken)
      // console.log('userTok --- ', userTok);
      // const utok2 = await GoogleSignin.getTokens()
      // console.log('utok2 --- ', utok2);
      // const userInfo = await GoogleSignin.getCurrentUser();
      console.log(JSON.stringify(userInfo));
      login({ userInfo })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // alert('User has not signed in yet');
        console.log('User has not signed in yet-----------', error);
      } else {
        // alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info-----", error);
      }
    }
  };

  const signOutFn = async () => {
    try {
      // await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log("ho gya sign out")
      logout()
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.textBox}>
        <Text style={[styles.headText, { color: colors.text }]}>The LNMIIT</Text>
        <Text style={[styles.subheadText, { color: colors.text }]}>Counselling and Guidance Cell</Text>
      </View>

      <View style={[styles.containerBox, { backgroundColor: colors.cardBG }]}>
        <Image source={require('../assets/images/ccell.png')} style={{
          width: 150,
          height: 150,
          marginBottom: 50
        }} />

        <TouchableOpacity
          style={styles.loginDomain}
          onPress={() => signInFn()}
        >
          <Text style={styles.loginText}>Login with LNMIIT Domain ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.guestDomain}
          onPress={() => {
            navigation.navigate("Guest User")
          }}
        >
          <Text style={styles.guestText}>Continue as Guest User</Text>
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>For the students seeking admission</Text>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  subheadText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  containerBox: {
    width: '88%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginDomain: {
    backgroundColor: '#FFCBA6',
    width: '85%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  loginText: {
    color: '#FF6A00',
    fontFamily: 'Poppins-Medium',
  },
  guestDomain: {
    backgroundColor: '#C3B0FF',
    width: '85%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  guestText: {
    color: '#551FFF',
    fontFamily: 'Poppins-Medium',
  }
})
