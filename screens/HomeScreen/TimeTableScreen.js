import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const TimeTableScreen = () => {
  return (
    <View style={styles.menuScreen}>
      <TouchableOpacity
        style={styles.quick0}
      >
        <Text style={styles.q0Text}>Bus Time Table</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick1}
      >
        <Text style={styles.q1Text}>1st Semester</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick2}
      >
        <Text style={styles.q2Text}>2nd Semester</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick3}
      >
        <Text style={styles.q3Text}>3rd Semester</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick4}
      >
        <Text style={styles.q4Text}>4th Semester</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick1}
      >
        <Text style={styles.q1Text}>5th Semester</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick2}
      >
        <Text style={styles.q2Text}>6th Semester</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick3}
      >
        <Text style={styles.q3Text}>7th Semester</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick4}
      >
        <Text style={styles.q4Text}>8th Semester</Text>
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
  quick0: {
    backgroundColor: '#47F4BC',
    width: '85%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick1: {
    backgroundColor: '#FFCBA6',
    width: '40%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick2: {
    backgroundColor: '#C3B0FF',
    width: '40%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick3: {
    backgroundColor: '#A6E6FF',
    width: '40%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick4: {
    backgroundColor: '#FEB2C3',
    width: '40%',
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
})