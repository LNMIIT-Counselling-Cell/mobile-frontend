import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const MenuScreen = () => {
  return (
    <View style={styles.menuScreen}>
      <TouchableOpacity
        style={styles.quick1}
      >
        <Image source={require('../../assets/images/mess_menu.png')} />
        <Text style={styles.q1Text}>Mess Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick2}
      >
        <Image source={require('../../assets/images/bazzinga.png')} />
        <Text style={styles.q2Text}>Bazinga</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick3}
      >
        <Image source={require('../../assets/images/tfb.png')} />
        <Text style={styles.q3Text}>The Food barn</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  menuScreen: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  quick1: {
    backgroundColor: '#FFCBA6',
    width: 150,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
  },
  quick2: {
    backgroundColor: '#C3B0FF',
    width: 150,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
  },
  quick3: {
    backgroundColor: '#A6E6FF',
    width: 150,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
  },
  q1Text: {
    color: '#FF6A00',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  q2Text: {
    color: '#551FFF',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  q3Text: {
    color: '#00B7FE',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
})