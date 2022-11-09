import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CurriculumScreen = ({ navigation }) => {
  return (
    <View style={styles.menuScreen}>
      <TouchableOpacity
        style={styles.quick1}
        onPress={() => {
          navigation.navigate("ExtraPDF", {headerName:"CSE Curriculum", pdfName:"CSE"})
        }}
      >
        <Text style={styles.q1Text}>Computer Science and Engineering</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick2}
        onPress={() => {
          navigation.navigate("ExtraPDF", {headerName:"CCE Curriculum", pdfName:"CCE"})
        }}
      >
        <Text style={styles.q2Text}>Communication and Computer Engineering</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick3}
        onPress={() => {
          navigation.navigate("ExtraPDF", {headerName:"ECE Curriculum", pdfName:"ECE"})
        }}
      >
        <Text style={styles.q3Text}>Electronics and Communication Engineering</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick4}
        onPress={() => {
          navigation.navigate("ExtraPDF", {headerName:"ME Curriculum", pdfName:"ME"})
        }}
      >
        <Text style={styles.q4Text}>Mechanical Engineering</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  menuScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quick0: {
    backgroundColor: '#47F4BC',
    width: '85%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 15,
  },
  quick1: {
    backgroundColor: '#FFCBA6',
    width: '85%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick2: {
    backgroundColor: '#C3B0FF',
    width: '85%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick3: {
    backgroundColor: '#A6E6FF',
    width: '85%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick4: {
    backgroundColor: '#FEB2C3',
    width: '85%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  q0Text: {
    color: '#3A8A38',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  q1Text: {
    color: '#FF6A00',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  q2Text: {
    color: '#551FFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  q3Text: {
    color: '#00B7FE',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  q4Text: {
    color: '#FD2254',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  checkBoxes: {
    flexDirection: "column",
    margin: 20,
    height: 150,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  checkBoxText: {
    textDecorationLine: "none",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
})