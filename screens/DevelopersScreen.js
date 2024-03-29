import React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native';

export const DevelopersScreen = () => {

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={[styles.headerText, { color: colors.text }]}>Core Developers</Text>
        <View style={styles.firstRow}>
          <View style={styles.card}>
            <Image source={require('../assets/images/sriraj_behera.jpg')} style={styles.cardImg} />
            <Text style={[styles.nameText, { color: '#FF6A00' }]}>Sriraj Behera</Text>
            <View style={styles.cardCTA}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel: +917021249264`)
                }}
              >
                <Image source={require('../assets/images/call.png')} style={styles.ctaicon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`mailto: 20ucs201@lnmiit.ac.in`)
                }}
              >
                <Image source={require('../assets/images/gmail.png')} style={styles.ctaicon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: '#C3B0FF', borderRadius: 8 }]}>
            <Image source={require('../assets/images/tushar_jain.jpg')} style={styles.cardImg} />
            <Text style={[styles.nameText, { color: '#551FFF' }]}>Tushar Jain</Text>
            <View style={styles.cardCTA}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel: +916350290184`)
                }}
              >
                <Image source={require('../assets/images/call.png')} style={styles.ctaicon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`mailto: 20ucs211@lnmiit.ac.in`)
                }}
              >
                <Image source={require('../assets/images/gmail.png')} style={styles.ctaicon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.secondRow}>
          <View style={[styles.card, { backgroundColor: '#A6E6FF', borderRadius: 8 }]}>
            <Image source={require('../assets/images/ishan_sharma.jpeg')} style={styles.cardImg} />
            <Text style={[styles.nameText, { color: '#00B7FE' }]}>Ishan Sharma</Text>
            <View style={styles.cardCTA}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel: +917021833803`)
                }}
              >
                <Image source={require('../assets/images/call.png')} style={styles.ctaicon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`mailto: 20ucs086@lnmiit.ac.in`)
                }}
              >
                <Image source={require('../assets/images/gmail.png')} style={styles.ctaicon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.card, { backgroundColor: '#FEB2C3', borderRadius: 8 }]}>
            <Image source={require('../assets/images/sourabh_joshi.jpg')} style={styles.cardImg} />
            <Text style={[styles.nameText, { color: '#FD2254' }]}>Sourabh Joshi</Text>
            <View style={styles.cardCTA}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel: +919549408165`)
                }}
              >
                <Image source={require('../assets/images/call.png')} style={styles.ctaicon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`mailto: 20ucc103@lnmiit.ac.in`)
                }}
              >
                <Image source={require('../assets/images/gmail.png')} style={styles.ctaicon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={[styles.headerText, { color: colors.text }]}>UI/UX Designers</Text>
        <View style={styles.firstRow}>

          <View style={styles.card}>
            <Image source={require('../assets/images/neev_nagvani.jpeg')} style={styles.cardImg} />
            <Text style={[styles.nameText, { color: '#FF6A00' }]}>Neev Nagvani</Text>
            <View style={styles.cardCTA}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel: +918707254403`)
                }}
              >
                <Image source={require('../assets/images/call.png')} style={styles.ctaicon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`mailto: 20uec082@lnmiit.ac.in`)
                }}
              >
                <Image source={require('../assets/images/gmail.png')} style={styles.ctaicon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.card, { backgroundColor: '#C3B0FF', borderRadius: 8 }]}>
            <Image source={require('../assets/images/vansh_mahajan.jpeg')} style={styles.cardImg} />
            <Text style={[styles.nameText, { color: '#551FFF' }]}>Vansh Mahajan</Text>
            <View style={styles.cardCTA}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel: +918958035895`)
                }}
              >
                <Image source={require('../assets/images/call.png')} style={styles.ctaicon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`mailto: 20ucs220@lnmiit.ac.in`)
                }}
              >
                <Image source={require('../assets/images/gmail.png')} style={styles.ctaicon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 20,
    height: '100%',
    paddingBottom: 80,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFCBA6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
    borderRadius: 8,
    paddingVertical: 10,
    height: 185,
  },
  cardImg: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  nameText: {
    fontSize: 16,
    fontWeight: '400',
  },
  cardCTA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaicon: {
    marginRight: 15,
    width: 24,
    height: 24,
  },
  firstRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  secondRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  }
})