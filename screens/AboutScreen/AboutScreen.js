import React from 'react'
import { Button, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function AboutScreen({ navigation }) {

  const { colors } = useTheme()

  const dirText2 = `
  Counselling and Guidance Cell to help you navigate your college campus and uncover the answers to possibly all the questions you might have regarding your day-to-day life on campus. The app provides a complete set of information about Institute resources, academic programs, campus life, rules of behavior and the plethora of co-curricular activities that are an integral part of your identity as an LNMIIT student.

  I hope this user-friendly app proves to be a one-stop solution for your information needs.

  Best wishes!`

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.ccellgrp}>
        <Image source={require('../../assets/images/aboutus.png')} />
      </View>
      <View style={styles.ccellicon}>
        <Image source={require('../../assets/images/ccell.png')} style={styles.ccelliconimg} />
      </View>
      <View style={styles.headText}>
        <Text style={[styles.lnmiittext, { color: colors.text }]}>The LNMIIT</Text>
        <Text style={[styles.ccellText, { color: colors.text }]}>Counselling & Guidance Cell</Text>
      </View>
      <Text style={[styles.maintext, { color: colors.text }]}>LNMIIT Counselling & Guidance Cell (C-Cell) is a body that functions with the objective of facilitating the fresh batch make a smooth and healthy transition from 'new students' to LNMIITians, sensitize them with the LNMIIT ethos, help provide answers to their queries ranging from academic to personal and social ones. It works towards helping them adjust to the new campus as a home away from home. It undertakes a variety of roles and responsibilities ranging from organizing the Orientation Programme for the new batch, providing support in the admission process, document verification & reporting, conducting the Student-Faculty Mentorship Programme and related activities during the academic year.</Text>
      <Text style={[styles.headerTextcordi, { color: colors.text }]}>Coordinators - Y20</Text>

      <View style={styles.cardBox}>
        <View style={styles.card}>
          <Image source={require('../../assets/images/neev_nagvani.png')} />
          <Text style={[styles.nameText, { color: '#FF6A00' }]}>Neev Nagvani</Text>
          <View style={styles.cardCTA}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel: +918707254403`)
              }}
            >
              <Image source={require('../../assets/images/call.png')} style={styles.ctaicon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`mailto: 20uec082@lnmiit.ac.in`)
              }}
            >
              <Image source={require('../../assets/images/gmail.png')} style={styles.ctaicon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.card, { backgroundColor: '#C3B0FF', borderRadius: 8 }]}>
          <Image source={require('../../assets/images/prerna_sharma.png')} />
          <Text style={[styles.nameText, { color: '#551FFF' }]}>Prerna Sharma</Text>
          <View style={styles.cardCTA}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel: +919790532081`)
              }}
            >
              <Image source={require('../../assets/images/call.png')} style={styles.ctaicon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`mailto: 20ucs148@lnmiit.ac.in`)
              }}
            >
              <Image source={require('../../assets/images/gmail.png')} style={styles.ctaicon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.card, { backgroundColor: '#FEB2C3', borderRadius: 8 }]}>
          <Image source={require('../../assets/images/vansh_mahajan.png')} />
          <Text style={[styles.nameText, { color: '#FD2254' }]}>Vansh Mahajan</Text>
          <View style={styles.cardCTA}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('tel: +918958035895')
              }}
            >
              <Image source={require('../../assets/images/call.png')} style={styles.ctaicon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`mailto: 20ucs220@lnmiit.ac.in`)
              }}
            >
              <Image source={require('../../assets/images/gmail.png')} style={styles.ctaicon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={[styles.headerTextmsg, { color: colors.text }]}>Convener's Message</Text>
      <View style={styles.director}>
        <View style={styles.dirTextBox}>
          <Text style={[styles.dirText1, { color: colors.text }]}>Welcome to a meaningful and rewarding experience at the LNM Institute of Information Technology, Jaipur. As you embark on your journey as an LNMIITian, you and your family are full of excitement and hope, as well as a range of queries and concerns in your mind. The C-Cell application has been designed by the LNMIIT.</Text>
        </View>
        <View style={styles.dirsection}>
          <Image source={require('../../assets/images/usha_maam.png')} style={styles.dirimg} />
          <Text style={[styles.dirname, { color: colors.text }]}>Dr. Usha Kanoongo</Text>
        </View>
      </View>
      <Text style={[styles.dirText2, { color: colors.text }]}>{dirText2}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  ccellgrp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  ccellicon: {
    position: 'relative',
    bottom: 30,
    left: 20,
  },
  ccelliconimg: {
    width: 100,
    height: 100,
  },
  headText: {
    position: 'relative',
    bottom: 95,
    left: 125,
  },
  lnmiittext: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  ccellText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 16,
  },
  maintext: {
    textAlign: 'justify',
    position: 'relative',
    bottom: 50,
  },
  headerTextcordi: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
    position: 'relative',
    bottom: 50,
  },
  headerTextmsg: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
    position: 'relative',
    bottom: 10,
  },
  cardBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    bottom: 30,
  },
  card: {
    backgroundColor: '#FFCBA6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '30%',
    borderRadius: 8,
    paddingVertical: 10,
    height: 155,
  },
  nameText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardCTA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaicon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  director: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dirsection: {
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dirTextBox: {
    width: '65%',
  },
  dirText1: {
    textAlign: 'justify',
    paddingRight: 10,
  },
  dirText2: {
    textAlign: 'justify',
    marginBottom: 10,
    position: 'relative',
    bottom: 10,
  },
  dirname: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
  }
})