import React, { useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { AuthContext } from '../components/Context';

export default function LoginScreen({ navigation }) {

  const { login, logout } = useContext(AuthContext)

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
        onPress={() => {
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
                } else if (error.code === statusCodes.IN_PROGRESS) {
                  // operation (e.g. sign in) is in progress already
                  console.log("ERROR IS: IN_PROGRESS")
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                  // play services not available or outdated
                  console.log("ERROR IS: PLAY_SERVICES_NOT_AVAILABLE")
                } else {
                  // some other error happened
                  console.log("ERROR IS: lnmiit id se aao bhai")
                }
              })
            }
          }).catch((e) => {
            console.log("ERROR IS: " + JSON.stringify(e));
          })
        }}
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