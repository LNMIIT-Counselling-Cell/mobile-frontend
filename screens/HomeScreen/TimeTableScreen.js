import { useTheme } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";
import { CheckBox } from '@rneui/themed';

export const TimeTableScreen = ({ navigation }) => {

  const { colors } = useTheme()
  const [batchYear, setBatchYear] = useState(1);

  // const staticData = [
  //   {
  //     id: 0,
  //     size: 25,
  //     fillColor: "#FFCBA6",
  //     unfillColor: "#FFFFFF",
  //     text: "1st Year",
  //     textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
  //   },
  //   {
  //     id: 1,
  //     size: 25,
  //     fillColor: "#C3B0FF",
  //     unfillColor: "#FFFFFF",
  //     text: "2nd Year",
  //     textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
  //   },
  //   {
  //     id: 2,
  //     size: 25,
  //     fillColor: "#A6E6FF",
  //     unfillColor: "#FFFFFF",
  //     text: "3rd Year",
  //     textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
  //   },
  //   {
  //     id: 3,
  //     size: 25,
  //     fillColor: "#FEB2C3",
  //     unfillColor: "#FFFFFF",
  //     text: "4th Year",
  //     textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
  //   },
  // ];

  return (
    <View style={styles.menuScreen}>
      <TouchableOpacity
        style={styles.quick0}
        onPress={() => {
          navigation.navigate("ExtraPDF", { headerName: "Bus Time Table", pdfName: "bus_time_table" })
        }}
      >
        <Text style={styles.q0Text}>Bus Time Table</Text>
      </TouchableOpacity>

      <Text style={[styles.headerText, { color: colors.text }]}>Select Year</Text>

      {/* <BouncyCheckboxGroup
        data={staticData}
        style={styles.checkBoxes}
        onChange={(selectedItem) => {
          setBatchYear(selectedItem.id + 1);
        }}
      /> */}

      <View style={{ display: 'flex', flexDirection: 'column' }}>

        <CheckBox
          checked={batchYear === 1}
          onPress={() => {
            setBatchYear(1)
          }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title="1st Year"
          textStyle={{ color: colors.text }}
          fontFamily="Poppins-Medium"
          size={35}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
        <CheckBox
          title="2nd Year"
          textStyle={{ color: colors.text }}
          checked={batchYear === 2}
          onPress={() => {
            setBatchYear(2)
          }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={35}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
        <CheckBox
          title="3rd Year"
          textStyle={{ color: colors.text }}
          checked={batchYear === 3}
          onPress={() => {
            setBatchYear(3)
          }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={35}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
        <CheckBox
          title="4th Year"
          textStyle={{ color: colors.text }}
          checked={batchYear === 4}
          onPress={() => {
            setBatchYear(4)
          }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          size={35}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
      </View>

      <TouchableOpacity
        style={styles.quick1}
        onPress={() => {
          navigation.navigate("ExtraPDF", { headerName: "CSE Year-" + batchYear, pdfName: "CSE_" + batchYear })
        }}
      >
        <Text style={styles.q1Text}>Computer Science and Engineering</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick2}
        onPress={() => {
          navigation.navigate("ExtraPDF", { headerName: "CCE Year-" + batchYear, pdfName: "CCE_" + batchYear })
        }}
      >
        <Text style={styles.q2Text}>Communication and Computer Engineering</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick3}
        onPress={() => {
          navigation.navigate("ExtraPDF", { headerName: "ECE Year-" + batchYear, pdfName: "ECE_" + batchYear })
        }}
      >
        <Text style={styles.q3Text}>Electronics and Communication Engineering</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quick4}
        onPress={() => {
          navigation.navigate("ExtraPDF", { headerName: "ME Year-" + batchYear, pdfName: "ME_" + batchYear })
        }}
      >
        <Text style={styles.q4Text}>Mechanical Engineering</Text>
      </TouchableOpacity>
    </View>
    // <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    //   <Text>Coming soon</Text>
    // </View>
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