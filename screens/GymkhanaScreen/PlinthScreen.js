import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';
import CarouselCards from '../../components/CarouselCards';

export const PlinthScreen = () => {

  const { colors } = useTheme()

  const imgData = [
    {
      imgsrc: require('../../assets/scitech/1.jpeg')
    },
    {
      imgsrc: require('../../assets/scitech/2.jpeg')
    },
    {
      imgsrc: require('../../assets/scitech/3.jpeg')
    },
    {
      imgsrc: require('../../assets/scitech/4.jpeg')
    },
    {
      imgsrc: require('../../assets/scitech/5.jpeg')
    }
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/scitech/plinth.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>PLINTH is the annual Techno-Management Literary fest of The LNMIIT. It is one of the exquisite platforms which help students plunge bring out the creativity skills and for all to witness one of the most beautiful and breath-taking amalgamations PLINTH organizes various events related to ROBOTIX, CYBERNETRIX, Literature and Business. Plinth for the past years has served to be the ideal destination for the millennials to learn, create and experience the beauty of technology. It proudly encompasses and transcends the boundaries of science and technology, providing its audience a completely indelible experience. This festival comprises of a plethora of events as well as talks by eminent personalities in the field of science, technology and management. A wide range of competitions in diverse fields besides exhibitions, workshops and fun challenges tempt a really big number of participants from across the length and breadth of the country. In a nutshell, PLINTH 2023 promises to keep participants from all walks and tastes occupied for an awe-in-spring and absolutely overwhelming. 2-day experience.</Text>
      </View>

      <PersonCard name={"Gunit Varshney"} position={"Fest Head"} phone="+918875510652" email={"19ucs188@lnmiit.ac.in"} />
      <PersonCard name={"Raja Singh"} position={"Fest Head"} phone="+919680372941" email={"19ucc019@lnmiit.ac.in"} />

      <Text style={[styles.headerText, { color: colors.text }]}>Gallery</Text>

      <CarouselCards data={imgData} />

      <View style={styles.connectBox}>
        <Text style={[styles.headerText, { color: colors.text }]}>Connect with us</Text>
        <View style={styles.connect}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/gmail.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/google_drive.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/youtube.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/instagram.png')} />
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
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
    textAlign: 'justify',
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
  connect: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginTop: 10,
  },
  connectBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
})