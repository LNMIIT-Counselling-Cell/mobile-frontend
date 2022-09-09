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
        <Text style={[styles.aboutText, { color: colors.text }]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).</Text>
      </View>

      <PersonCard name={"Sarthak Goyal"} position={"General secretary"} />
      <PersonCard name={"Diya Rajwanshi"} position={"Associate General Secretary"} />

      <TouchableOpacity
        style={styles.topCard}
      >
        <Text style={styles.topCardText}>Vivacity</Text>
      </TouchableOpacity>

      <View style={styles.cardView}>
        <TouchableOpacity
          style={styles.card1}
        >
          <Image source={require('../../assets/cult/aaveg.png')} />
          <Text style={styles.card1Text}>Aaveg, The Nukkad Mandali</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
        >
          <Image source={require('../../assets/cult/capriccio.png')} />
          <Text style={styles.card2Text}>Capriccio, The Music Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
        >
          <Image source={require('../../assets/cult/eminence.png')} />
          <Text style={styles.card3Text}>Eminence, The Fashion Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
        >
          <Image source={require('../../assets/cult/imagination.png')} />
          <Text style={styles.card4Text}>Imagination</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card1}
        >
          <Image source={require('../../assets/cult/insignia.png')} />
          <Text style={styles.card1Text}>Insignia, The Dance Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
        >
          <Image source={require('../../assets/cult/LC.png')} />
          <Text style={styles.card2Text}>Literary Committee</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
        >
          <Image source={require('../../assets/cult/media_cell.png')} />
          <Text style={styles.card3Text}>Media Cell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
        >
          <Image source={require('../../assets/cult/rendition.png')} />
          <Text style={styles.card4Text}>Rendition, The Dramatics Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card1}
        >
          <Image source={require('../../assets/cult/sankalp.png')} />
          <Text style={styles.card1Text}>Sankalp Club</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
        >
          <Image source={require('../../assets/cult/vignette.png')} />
          <Text style={styles.card2Text}>Vignette, The Art Club</Text>
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
})