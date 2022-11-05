import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';
import CarouselCards from '../../components/CarouselCards';

export const AavegScreen = () => {

  const imgData = require("../../assets/json/global.json").organization_img.cult.aaveg;
  imgData.forEach(img => {
    img.imgsrc = img.imgsrc.split("file/d/").join("uc?export=view&id=").split("/view")[0]
  });

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/cult/aaveg.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>Nukkad Natak or Street theater is a form of theatrical performance in outdoor public spaces without a specific paying audience. It is one of the oldest forms of theater used to spread awareness on societal issues. Our club AAVEG - Nukkad Mandli brings you the real side of what nukkad natak exactly is; everything from loud monologues, moving slogans, powerful expressions and captivating music. It is a beautiful way of connecting with people and enlightening them about the issues that we are facing as a society. Our club has raised awareness on topics like body shaming, male/female sexual abuse, rights of LGBTQ community, menstruation, reservation and many more among common people. Over the years, our club has contributed to the society by performing at various locations like World Trade Park, Jaipur (WTP). We have also participated and even won in inter-college competitions of IIT Roorkee, Manipal University Jaipur and many more. Not just that, Aaveg is not only a club, it's a family! Hours and hours of relentless practice, tons of laughter, excitement and a little bit of nervousness have given us the bond that we will cherish for life.</Text>
      </View>

      <PersonCard name={"Chintan S Makhijani"} position={"Coordinator"} phone="+918866941609" email={"19ucc138@lnmiit.ac.in"} />
      <PersonCard name={"Mayank Vyas"} position={"Coordinator"} phone="+919111607272" email={"19uec065@lnmiit.ac.in"} />
      <PersonCard name={"Muskan Maheshwari"} position={"Coordinator"} phone="+917023125605" email={"19ucc146@lnmiit.ac.in"} />
      <PersonCard name={"Pratyush Chahar"} position={"Coordinator"} phone="+917078827666" email={"19ucs043@lnmiit.ac.in"} />

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