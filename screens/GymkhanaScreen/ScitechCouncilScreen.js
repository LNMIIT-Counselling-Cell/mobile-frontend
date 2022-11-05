import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';

export default function ScitechCouncilScreen({ navigation }) {

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/images/scitech_council.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>The Council concentrates on imparting students with knowledge that is beyond the academic curriculum. It aims at stimulating the technical mindset of the students and carries out activities like Workshops, Competitions and Recreational events to provide all students with hands-on experience as well as practical knowledge through the following clubs: Cybros, Phoenix, E-cell, Astronomy Club, Debate Society, Quizzinga, and Cipher. The Council thus believes that student organizations are a great way for a student to meet new people, broaden their knowledge and skills, and enrich their college experience. It is not only in charge of the technical aspects of events, but it also ensures that they operate smoothly and efficiently.</Text>
      </View>

      <PersonCard name={"Ayush Sharma"} position={"General secretary"} phone="+919460257928" email={"gsec.science@lnmiit.ac.in"} />
      <PersonCard name={"Muskan Singla"} position={"Associate General Secretary"} phone="+918377089610" email={"20ucc068@lnmiit.ac.in"} />

      {/* <TouchableOpacity
        style={styles.topCard}
        onPress={() => {
          navigation.navigate('Plinth')
        }}
      >
        <Text style={styles.topCardText}>Plinth</Text>
      </TouchableOpacity> */}

      <View style={styles.cardView}>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Astronomy Club')
          }}
        >
          <Image source={require('../../assets/scitech/astro.png')} />
          <Text style={styles.card1Text}>Astronomy Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Cipher')
          }}
        >
          <Image source={require('../../assets/scitech/cipher.png')} />
          <Text style={styles.card2Text}>Cipher</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Cybros')
          }}
        >
          <Image source={require('../../assets/scitech/cybros.png')} />
          <Text style={styles.card3Text}>Cybros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
          onPress={() => {
            navigation.navigate('Debsoc')
          }}
        >
          <Image source={require('../../assets/scitech/debsoc.png')} />
          <Text style={styles.card4Text}>Debsoc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('E-Cell')
          }}
        >
          <Image source={require('../../assets/scitech/e_cell.png')} style={{ width: 150, height: 100 }} />
          <Text style={styles.card1Text}>E-Cell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Phoenix')
          }}
        >
          <Image source={require('../../assets/scitech/phoenix.png')} />
          <Text style={styles.card2Text}>Phoenix</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Quizzinga')
          }}
        >
          <Image source={require('../../assets/scitech/quizzinga.png')} />
          <Text style={styles.card3Text}>Quizzinga</Text>
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
    width: 120,
    height: 120,
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
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    justifyContent: 'space-around',
  },
  card1: {
    backgroundColor: '#FFCBA6',
    width: '46%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    width: '46%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    width: '46%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    width: '46%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card4Text: {
    color: '#FD2254',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
})