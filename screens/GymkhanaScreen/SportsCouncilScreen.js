import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';

export default function SportsCouncilScreen({ navigation }) {

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/images/sports_council.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>The LNMIIT Sports Council works towards instilling a subtle sports culture among students by organizing and promoting various outdoor and indoor sport events. The council is responsible for all the decision making involving the sports inventory of the institute. Various events are organized throughout the year which includes, LNMIIT Premier League, LNMIIT Football League, LNMIIT Volleyball League. Inter- year and inter-hostel tournaments are also organized to boost unanimity via the means of sports. We also organize awareness and celebratory events like the Yoga-day, Sports day and Run for unity. Any student can become a part of this recreational and competitive sports program, irrespective of any prior experience in the game. Students are encouraged to participate in regional and national level competitions and are accordingly trained. The main target of the Sports Council is to develop an active, healthy, and fit society through sports and physical activities.</Text>
      </View>

      <PersonCard name={"Pratik Aswani"} position={"General secretary"} phone="+919799816014" email={"gsec.sports@lnmiit.ac.in"} />
      <PersonCard name={"Tanya Agarwal"} position={"Associate General Secretary"} phone="+916386084572" email={"20ucs208@lnmiit.ac.in"} />

      {/* <TouchableOpacity
        style={styles.topCard}
        onPress={() => {
          navigation.navigate('Desportivos')
        }}
      >
        <Text style={styles.topCardText}>Desportivos</Text>
      </TouchableOpacity> */}

      <View style={styles.cardView}>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Badminton')
          }}
        >
          <Image source={require('../../assets/sports/badminton.png')} />
          <Text style={styles.card1Text}>Badminton</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Chess')
          }}
        >
          <Image source={require('../../assets/sports/chess.png')} />
          <Text style={styles.card2Text}>Chess</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Volleyball')
          }}
        >
          <Image source={require('../../assets/sports/volleyball.png')} />
          <Text style={styles.card3Text}>Volleyball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
          onPress={() => {
            navigation.navigate('Cricket')
          }}
        >
          <Image source={require('../../assets/sports/cricket.png')} />
          <Text style={styles.card4Text}>Cricket</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Basketball')
          }}
        >
          <Image source={require('../../assets/sports/basketball.png')} />
          <Text style={styles.card1Text}>Basketball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Football')
          }}
        >
          <Image source={require('../../assets/sports/football.png')} />
          <Text style={styles.card2Text}>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Kabaddi')
          }}
        >
          <Image source={require('../../assets/sports/kabaddi.png')} />
          <Text style={styles.card3Text}>Kabaddi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
        >
          <Image source={require('../../assets/sports/karate.png')} />
          <Text style={styles.card4Text}>Karate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Squash')
          }}
        >
          <Image source={require('../../assets/sports/squash.png')} />
          <Text style={styles.card1Text}>Squash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Tennis')
          }}
        >
          <Image source={require('../../assets/sports/tennis.png')} />
          <Text style={styles.card2Text}>Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Table Tennis')
          }}
        >
          <Image source={require('../../assets/sports/table_tennis.png')} />
          <Text style={styles.card3Text}>Table Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
        >
          <Image source={require('../../assets/sports/boxing.png')} />
          <Text style={styles.card4Text}>Boxing</Text>
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
})