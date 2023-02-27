import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { AuthContext } from '../components/Context';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";
import { CheckBox } from '@rneui/themed';
// import RadioGroup from 'react-native-radio-buttons-group';
import VersionInfo from 'react-native-version-info';

export const SettingsScreen = ({ navigation }) => {

  const { colors } = useTheme();

  const { logout, checkTheme, systheme } = useContext(AuthContext)
  const [isLoadingSignout, setIsLoadingSignout] = useState(false);
  const [selectedIndex, setIndex] = useState(0);

  // let radioButtons = [
  //   {
  //     id: '1', // acts as primary key, should be unique and non-empty string
  //     label: "Light",
  //     value: 'light',
  //     color: colors.text,
  //     borderColor: colors.text,
  //     labelStyle: StyleSheet.create({ color: colors.text, fontFamily: 'Poppins-Medium', fontWeight: 'bold', fontSize: 16 })
  //   },
  //   {
  //     id: '2',
  //     label: "Dark",
  //     value: 'dark',
  //     color: colors.text,
  //     borderColor: colors.text,
  //     labelStyle: { fontFamily: 'Poppins-Medium', fontWeight: 'bold', fontSize: 16, color: colors.text },
  //   },
  //   {
  //     id: '3',
  //     label: "System",
  //     value: 'system',
  //     color: colors.text,
  //     borderColor: colors.text,
  //     labelStyle: { fontFamily: 'Poppins-Medium', fontWeight: 'bold', fontSize: 16, color: colors.text },
  //   }
  // ];

  function onPressRadioButton(radioButtonsArray) {
    radioButtons = radioButtonsArray;
    console.log(radioButtons);
    let selectedTheme = '0';
    if (radioButtonsArray[0].selected) {
      selectedTheme = '1';
    }
    else if (radioButtonsArray[1].selected) {
      selectedTheme = '2';
    }
    else {
      selectedTheme = '0';
    }
    setSystemTheme(selectedTheme)
  }

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

  const staticData = [
    {
      id: 1,
      size: 25,
      fillColor: "#47F4BC",
      unfillColor: "#FFFFFF",
      text: "Light",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    },
    {
      id: 2,
      size: 25,
      fillColor: "#47F4BC",
      unfillColor: "#FFFFFF",
      text: "Dark",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    },
    {
      id: 0,
      size: 25,
      fillColor: "#47F4BC",
      unfillColor: "#FFFFFF",
      text: "System",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    }
  ];

  const setSystemTheme = async (theme) => {
    try {
      await AsyncStorage.setItem('systheme', theme)
      checkTheme()
    } catch (error) {
      console.error('Error setting ---- ', error)
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.themeBox}>
          <Text style={[styles.themeText, { color: colors.text }]}>Theme Management</Text>
          {/* <BouncyCheckboxGroup
            initial={parseInt(systheme)}
            data={staticData}
            style={styles.checkBoxes}
            checkboxProps={styles.checkstyle}
            onChange={(selectedItem) => {
              let selectedTheme = '0';
              if (selectedItem.text === 'Light') {
                selectedTheme = '1';
              }
              else if (selectedItem.text === 'Dark') {
                selectedTheme = '2';
              }
              else {
                selectedTheme = '0';
              }
              setSystemTheme(selectedTheme)
            }}
          /> */}
          <View style={{display: 'flex', flexDirection: 'row'}}>

            <CheckBox
              checked={selectedIndex === 1}
              onPress={() => {
                setIndex(1)
                setSystemTheme('1')
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Light"
              textStyle={{ color: colors.text }}
              fontFamily="Poppins-Medium"
              size={35}
              containerStyle={{ backgroundColor: 'transparent' }}
            />
            <CheckBox
              title="Dark"
              textStyle={{ color: colors.text }}
              checked={selectedIndex === 2}
              onPress={() => {
                setIndex(2)
                setSystemTheme('2')
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={35}
              containerStyle={{ backgroundColor: 'transparent' }}
              />
            <CheckBox
              title="System"
              textStyle={{ color: colors.text }}
              checked={selectedIndex === 0}
              onPress={() => {
                setIndex(0)
                setSystemTheme('0')
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={35}
              containerStyle={{ backgroundColor: 'transparent' }}
            />
          </View>

          {/* <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout='row'
            containerStyle={{ justifyContent: 'space-between', marginVertical: 12 }}
          /> */}

        </View>
        <View style={styles.themeBox}>
          <Text style={[styles.themeText, { color: colors.text }]}>About the Developers</Text>
          <TouchableOpacity
            style={styles.dev}
            onPress={() => {
              navigation.navigate('Meet our Developers')
            }}
          >
            <View style={styles.btn}>
              <Text style={styles.devText}>Meet the Team</Text>
            </View>
          </TouchableOpacity>
          <Text style={[styles.themeText, { color: colors.text }]}>Open Source Libraries</Text>
          <TouchableOpacity
            style={styles.lib}
            onPress={() => {
              navigation.navigate('Open Source Libraries')
            }}
          >
            <View style={styles.btn}>
              <Text style={styles.libText}>List of Magical Libraries</Text>
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
              <Text style={styles.logoutText}> {isLoadingSignout ? "Signing out" : "Sign Out"}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.themeBox}>
          <Text style={[styles.themeText, { color: colors.text }]}>Need Help?</Text>
          <Text style={[styles.versionText, { color: colors.text }]}>Contact C-Cell</Text>
        </View>

        <View style={styles.themeBox}>
          <Text style={[styles.themeText, { color: colors.text }]}>Report an app issue?</Text>
          <Text style={[styles.versionText, { color: colors.text }]}>Contact Developer</Text>
        </View>

        <View style={styles.themeBox}>
          <Text style={[styles.themeText, { color: colors.text }]}>App Version</Text>
          {/* <Text style={[styles.versionText, { color: colors.text }]}>1.0.1 v4 beta (pre production)</Text> */}
          <Text style={[styles.versionText, { color: colors.text }]}>{VersionInfo.appVersion} v{VersionInfo.buildVersion}</Text>
        </View>
      </View>
    </ScrollView>
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
  dev: {
    backgroundColor: '#FFCBA6',
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 14,
  },
  lib: {
    backgroundColor: '#C3B0FF',
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 14,
  },
  logout: {
    backgroundColor: '#A6E6FF',
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
  devText: {
    color: '#FF6A00',
    fontFamily: 'Poppins-Medium',
  },
  libText: {
    color: '#551FFF',
    fontFamily: 'Poppins-Medium',
  },
  logoutText: {
    color: '#00B7FE',
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
  },
  checkBoxes: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: '100%',
  },
  checkstyle: {
    paddingVertical: 10,
  },
  checkBoxText: {
    textDecorationLine: "none",
  },
})