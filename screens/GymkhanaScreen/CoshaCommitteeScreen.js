import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';

export default function CoshaCommitteeScreen({ navigation }) {

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/images/cosha.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>A college is composed of many things: students, professors, academic blocks, hostels, mess etc. For the proper functioning of everything lying beneath the biosphere of Hostels, Mess and Canteen, Committee of Students for Hostel Affairs (COSHA) is the way to go. COSHA supervises all matters of common interest to the Hostels, whilst handling queries, complaints and suggestions regarding Mess and Canteen. Be it improving the mess menu, lodging a complaint regarding canteen shops, or raising a query related to the habitable conditions of hostels; Cosha is inculcated with the responsibility of being the voice of students and relaying their valid concerns to the higher authorities. A meeting of COSHA is chaired by the President, and consists of the Convenor of COSHA, Hall Representatives and Chief Warden/Wardens. In a meeting, COSHA puts forward the students’ candid views and tries to establish a common ground. COSHA believes in eliminating all complaints, relaying constructive suggestions and maintaining transparency at all fronts.</Text>
      </View>

      <PersonCard name={"Shashwat Gupta"} position={"COSHA Head"} phone="+919068117145" email={"cosha@lnmiit.ac.in"} />

      <Text style={[styles.headerText, { color: colors.text }]}>Complaint Registration</Text>

      <View style={styles.subsection}>
          <TouchableOpacity
            style={styles.quick1}
            onPress={() => {
              Linking.openURL(`https://forms.gle/nGaxWsbt4Yjso7CT8`)
            }}
          >
            <Text style={styles.q1Text}>Canteen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick2}
            onPress={() => {
              Linking.openURL(`https://forms.gle/395WGMWEj5th7SZY9`)
            }}
          >
            <Text style={styles.q2Text}>Hostel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick3}
            onPress={() => {
              Linking.openURL(`https://forms.gle/2WtCSAN3ab8pxo1u8`)
            }}
          >
            <Text style={styles.q3Text}>Mess</Text>
          </TouchableOpacity>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  headercontainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    width: 80,
    height: 80,
  },
  aboutText: {
    fontSize: 12,
    marginTop: 10,
  },
  topCard: {
    backgroundColor: '#47F4BC',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
  topCardText: {
    color: '#3A8A38',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  cardView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card1: {
    backgroundColor: '#FFCBA6',
    width: 175,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
  },
  card1Text: {
    color: '#FF6A00',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  card2: {
    backgroundColor: '#C3B0FF',
    width: 175,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
  },
  card2Text: {
    color: '#551FFF',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  card3: {
    backgroundColor: '#A6E6FF',
    width: 175,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
  },
  card3Text: {
    color: '#00B7FE',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  card4: {
    backgroundColor: '#FEB2C3',
    width: 175,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
  },
  card4Text: {
    color: '#FD2254',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  subsection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  quick1: {
    backgroundColor: '#FFCBA6',
    width: '28%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick2: {
    backgroundColor: '#C3B0FF',
    width: '28%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick3: {
    backgroundColor: '#A6E6FF',
    width: '28%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick4: {
    backgroundColor: '#FEB2C3',
    width: '22.5%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  q1Text: {
    color: '#FF6A00',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  q2Text: {
    color: '#551FFF',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  q3Text: {
    color: '#00B7FE',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  q4Text: {
    color: '#FD2254',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
})