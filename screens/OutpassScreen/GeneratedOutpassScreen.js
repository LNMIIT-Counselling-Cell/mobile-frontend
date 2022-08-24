import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function GeneratedOutpassScreen({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingDayDate}>
          <Text style={styles.headingDate}>24-08-2022</Text>
          <Text style={styles.headingDay}>Wednesday</Text>
        </View>

        <View style={styles.form}>
          <Image style={styles.image} source={require("../../assets/images/outpass.png")} />
          <Text style={styles.outpassgen}>Outpass Generated</Text>
          <Text>Your Unique Token Number</Text>
          <Text>8473456324563</Text>

          <View style={styles.box}>
            <View style={styles.leftBox}>
              <Text>Purpose : SHAADI</Text>
              <Text>From : 7:30 AM</Text>
            </View>
            <View style={styles.rightBox}>
              <Text>Transport : GAADI</Text>
              <Text>To : 8:30 PM</Text>
            </View>
          </View>
        </View>

        <View style={styles.rules}>
          <Text>Rules & Regulations</Text>
          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingDayDate: {
    marginVertical: 20
  },
  form: {
    backgroundColor: '#E8E7E7',
    paddingHorizontal: 25,
    paddingVertical: 60,
    borderRadius: 10,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },
  image: {
    width: 150,
    height: 150,
  },
  outpassgen: {
    marginVertical: 15,
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  leftBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  rules: {
    width: '85%',
  }
});
