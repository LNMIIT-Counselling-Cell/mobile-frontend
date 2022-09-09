import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';
import CarouselCards from '../../components/CarouselCards';

export const CipherScreen = () => {

  const { colors } = useTheme()

  const imgData = [
    {
      imgsrc: require('../../assets/scitech_clubs/cipher/1.jpg')
    },
    {
      imgsrc: require('../../assets/scitech_clubs/cipher/2.jpg')
    },
    {
      imgsrc: require('../../assets/scitech_clubs/cipher/3.jpg')
    },
    {
      imgsrc: require('../../assets/scitech_clubs/cipher/4.jpg')
    },
    {
      imgsrc: require('../../assets/scitech_clubs/cipher/5.jpg')
    }
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/scitech/cipher.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>With the aim of the betterment of the college community, the motive of this club is to bring awareness about the ongoing threats in the Cyber Security world and prevention methods against adversaries and how Blockchain Technology can be used for securing it to the next level. The club’s motive is to create a healthy and knowledgeable environment and achieve various goals listed below that would enhance your performance: To cultivate CyberSecurity and Blockchain culture amongst the students, Introducing the concepts of Smart contracts, Blockchain Technology & Web3, Introducing students to Ethical and Competitive Hacking. CYBER SECURITY AND BLOCKCHAIN are upcoming fields with varied and exciting opportunities. CIPHER will help you dive in and grab the opportunities. It will also create a platform where you can solve problems and have discussions about the same.</Text>
      </View>

      <PersonCard name={"Ketan Jakhar"} position={"Coordinator"} phone="+919461721651" email={"19ucc020@lnmiit.ac.in"}/>
      <PersonCard name={"Vinay Sharma"} position={"Coordinator"} phone="+919549178651" email={"19ume011@lnmiit.ac.in"}/>
      <PersonCard name={"Viren Saroha"} position={"Coordinator"} phone="+919306555214" email={"19ucs152@lnmiit.ac.in"}/>
      <PersonCard name={"Meet Patel"} position={"Coordinator"} phone="+917041813479" email={"19ume020@lnmiit.ac.in"}/>

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