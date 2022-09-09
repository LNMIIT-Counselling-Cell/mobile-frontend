import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';
import CarouselCards from '../../components/CarouselCards';

export const ImaginationScreen = () => {

  const { colors } = useTheme()

  const imgData = [
    {
      imgsrc: require('../../assets/cult_clubs/imagination/1.jpeg')
    },
    {
      imgsrc: require('../../assets/cult_clubs/imagination/2.jpg')
    },
    {
      imgsrc: require('../../assets/cult_clubs/imagination/3.jpg')
    },
    {
      imgsrc: require('../../assets/cult_clubs/imagination/4.jpeg')
    },
    {
      imgsrc: require('../../assets/cult_clubs/imagination/5.jpg')
    }
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/cult/imagination.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>IMAGINATION is the photography and cinematography club of The LNM Institute of Information Technology,The club primarily covers any event by capturing them in photo and video formats. It consists of skillful and talented individuals who are extremely passionate in the domains of photography and cinematography. These members are selected after a thorough assessment of their skills. Imagination has four domains: Photography and Photo-editing, Cinematography and Video-editing, Graphics Designing, & Content Writing. The club conducts various events and competitions such as Through the lens, Click Start, Photowalk, workshops, Kalakriti, FMC, etc to upskill its members and also other students can exercise their creativity through these.The club also conducts various workshops like photo editing, video editing, and graphic designing. Anyone who wishes to showcase their talents can participate in the events and workshops.</Text>
      </View>

      <PersonCard name={"Harshini Aggarwal"} position={"Coordinator"} phone="+919664328160" email={"20uec056@lnmiit.ac.in"} />
      <PersonCard name={"Harshita Ghatiya"} position={"Coordinator"} phone="+919993227261" email={"20uec060@lnmiit.ac.in"} />
      <PersonCard name={"Jatin Sharma"} position={"Coordinator"} phone="+918278637830" email={"20ucc054@lnmiit.ac.in"} />
      <PersonCard name={"Prit Suvagiya"} position={"Coordinator"} phone="+917016534092" email={"20ucc080@lnmiit.ac.in"} />

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