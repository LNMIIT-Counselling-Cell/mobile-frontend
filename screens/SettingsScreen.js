import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../components/Context';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsScreen = () => {

  const NativeTheme = useTheme();
  const { colors } = useTheme();

  const { logout, toggleTheme } = useContext(AuthContext)
  const [isLoadingSignout, setIsLoadingSignout] = useState(false);

  const toggleLoadingSignOut = () => {
    setIsLoadingSignout(!isLoadingSignout);
  };

  const signOutFn = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("ho gya sign out")
      logout()
      setIsLoadingSignout(false);
    } catch (error) {
      setIsLoadingSignout(false);
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.themeBox}>
        <Text style={[styles.themeText, { color: colors.text }]}>Theme Management</Text>
        <TouchableOpacity
          style={styles.save}
          onPress={() => {
            if (NativeTheme.dark) {
              AsyncStorage.setItem("isDarkTheme", JSON.stringify(false))
              toggleTheme(false)
            }
            else {
              AsyncStorage.setItem("isDarkTheme", JSON.stringify(true))
              toggleTheme(true)
            }
          }}
        >
          <View style={styles.btn}>
            <Text style={styles.saveText}> {NativeTheme.dark ? "Enable Light Theme" : "Enable Dark Theme"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.themeBox}>
        <Text style={[styles.themeText, { color: colors.text }]}>Logout</Text>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            toggleLoadingSignOut()
            signOutFn()
          }}
        >
          <View style={styles.btn}>
            {isLoadingSignout && <ActivityIndicator size="large" color="#551FFF" />}
            <Text style={styles.logoutText}> {isLoadingSignout ? "Signing out ... ..." : "Sign Out"}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.themeBox}>
        <Text style={[styles.themeText, { color: colors.text }]}>Need Help?</Text>
        <Text style={[styles.versionText, { color: colors.text }]}>Contact C-Cell</Text>
      </View>

      <View style={styles.themeBox}>
        <Text style={[styles.themeText, { color: colors.text }]}>Report an app issue?</Text>
        <Text style={[styles.versionText, { color: colors.text }]}>Contact developer</Text>
      </View>

      <View style={styles.themeBox}>
        <Text style={[styles.themeText, { color: colors.text }]}>App Version</Text>
        <Text style={[styles.versionText, { color: colors.text }]}>1.0.1 v6 alpha (pre production)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeBox: {
    width: '85%',
  },
  themeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  save: {
    backgroundColor: '#FFCBA6',
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 14,
  },
  logout: {
    backgroundColor: '#C3B0FF',
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 14,
  },
  saveText: {
    color: '#FF6A00',
    fontFamily: 'Poppins-Medium',
  },
  logoutText: {
    color: '#551FFF',
    fontFamily: 'Poppins-Medium',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  versionText: {
    marginBottom: 12,
  }
})