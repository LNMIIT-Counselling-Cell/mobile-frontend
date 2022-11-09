import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';

export default function CulturalCouncilScreen({ navigation }) {

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/images/cultural_council.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>The Cultural Society of LNMIIT keeps the vibe and enthusiasm alive on the campus. It is a student body responsible for all the cultural events in the institute
          around the year. It is the functional body for organizing a plethora of events, club
          activities, and workshops throughout the year. Here, the like-minded gather to
          work in unison towards a specific goal and to provide the students with the
          opportunity and platform to learn, enjoy and showcase their talents and hard work -
          be it getting out a magazine or putting together a one-hour concert, a DJ night or in
          the fields of dance, drama, music, fashion or running health awareness
          programmes, cleanliness and donation drives for the poor and the needy.</Text>
      </View>

      <PersonCard name={"Sarthak Goyal"} position={"General secretary"} phone="+918690001213" email={"gsec.cultural@lnmiit.ac.in"} />
      <PersonCard name={"Diya Rajwanshi"} position={"Associate General Secretary"} phone="+916375334432" email={"20ucs067@lnmiit.ac.in"} />

      {/* <TouchableOpacity
        style={styles.topCard}
        onPress={() => {
          navigation.navigate('Vivacity')
        }}
      >
        <Text style={styles.topCardText}>Vivacity</Text>
      </TouchableOpacity> */}

      <View style={styles.cardView}>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"aaveg"})
          }}
        >
          <Image source={require('../../assets/cult/aaveg.png')} />
          <Text style={styles.card1Text}>Aaveg, The Nukkad Mandali</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"capriccio"})
          }}
        >
          <Image source={require('../../assets/cult/capriccio.png')} />
          <Text style={styles.card2Text}>Capriccio, The Music Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"eminence"})
          }}
        >
          <Image source={require('../../assets/cult/eminence.png')} />
          <Text style={styles.card3Text}>Eminence, The Fashion Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"fundoo"})
          }}
        >
          <Image source={require('../../assets/cult/fundoo.png')} style={styles.orgIcon} />
          <Text style={styles.card4Text}>Fundoo Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"imagination"})
          }}
        >
          <Image source={require('../../assets/cult/imagination.png')} />
          <Text style={styles.card1Text}>Imagination</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"insignia"})
          }}
        >
          <Image source={require('../../assets/cult/insignia.png')} />
          <Text style={styles.card2Text}>Insignia, The Dance Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"literary_committee"})
          }}
        >
          <Image source={require('../../assets/cult/LC.png')} />
          <Text style={styles.card3Text}>Literary Committee</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"media_cell"})
          }}
        >
          <Image source={require('../../assets/cult/media_cell.png')} />
          <Text style={styles.card4Text}>Media Cell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"rendition"})
          }}
        >
          <Image source={require('../../assets/cult/rendition.png')} />
          <Text style={styles.card1Text}>Rendition, The Dramatics Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"sankalp"})
          }}
        >
          <Image source={require('../../assets/cult/sankalp.png')} />
          <Text style={styles.card2Text}>Sankalp Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"cult", clubname:"vignette"})
          }}
        >
          <Image source={require('../../assets/cult/vignette.png')} />
          <Text style={styles.card3Text}>Vignette, The Art Club</Text>
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
  orgIcon: {
    width: 85,
    height: 64,
  }
})