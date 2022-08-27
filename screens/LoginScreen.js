import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { AuthContext } from '../components/Context';

export default function LoginScreen({ navigation }) {

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

  const signInFn = () => {
    GoogleSignin.configure({
      androidClientId: '891305350714-8okde30dj2evetbp38vp5ofnk63qsn1n.apps.googleusercontent.com',
      // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
    });
    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
        GoogleSignin.signIn().then((userInfo) => {
          // console.log(JSON.stringify(userInfo))
          login({ userInfo })
        }).catch((error) => {
          // console.log("ERROR IS: " + JSON.stringify(error));
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("ERROR IS: SIGN_IN_CANCELLED")
            showAlert("Error", "SIGN_IN_CANCELLED", "Ok")
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log("ERROR IS: IN_PROGRESS")
            showAlert("Error", "IN_PROGRESS", "Ok")
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log("ERROR IS: PLAY_SERVICES_NOT_AVAILABLE")
            showAlert("Error", "PLAY_SERVICES_NOT_AVAILABLE", "Ok")
          } else {
            // some other error happened
            console.log("ERROR IS: lnmiit id se aao bhai")
            showAlert("Error", "Login through lnmiit id only", "Ok")
          }
        })
      }
    }).catch((e) => {
      console.log("ERROR IS: " + JSON.stringify(e));
    })
  }

  const signOutFn = async () => {
    try {
      logout()
      await GoogleSignin.signOut();
      console.log("ho gya sign out")
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.login}
        onPress={() => signInFn()}
      >
        <Text>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => signOutFn()}
      >
        <Text style={styles.login}>Sign out</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: 'red',
  }
})