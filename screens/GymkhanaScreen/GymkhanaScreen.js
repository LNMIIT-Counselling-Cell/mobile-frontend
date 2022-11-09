import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PersonCard } from '../../components/PersonCard';

export default function GymkhanaScreen({ navigation }) {

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headercontainer}>
        <Image source={require('../../assets/images/gymkhana.png')} style={styles.image} />
        <Text style={[styles.aboutText, { color: colors.text }]}>Every college works on the efforts that its student masses put in it to make the college for the students, of the students, and by the students. The LNMIIT Students’ Gymkhana, under the Director of the Institute's patronage, acts as a communication service and facilitates decision-making in the greater interest of the students on The LNMIIT. The cultural, sports, and technological, all such student recreational and uniting activities are aided by their respective councils. The Presidential Council presides as the mediator between these three and focuses on the overall help of the college students and the smooth functioning of the Students’ Gymkhana. Being the elected students’ body of the institute, the Senate represents its student masses in areas of public interest as vested by the constitution of the Students’ Gymkhana to promote the institute's motto, “Excellence our motto, Discipline our way.”</Text>
      </View>

      <PersonCard name={"Poojan Gadhiya"} position={"President"} phone="+917016940547" email={"gym.president@lnmiit.ac.in"} />
      <PersonCard name={"Om Abhash Jha"} position={"Vice-President"} phone="+917722808382" email={"gym.vicepresident@lnmiit.ac.in"} />
      <PersonCard name={"Tanay Khandelwal"} position={"Finance Convener"} phone="+919782283212" email={"19ucs051@lnmiit.ac.in"} />

      <TouchableOpacity
        style={styles.topCard}
      >
        <Text style={styles.topCardText}>Presidential Council</Text>
      </TouchableOpacity>

      <View style={styles.cardView}>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Cultural Council')
          }}
        >
          <Image source={require('../../assets/images/cultural_council.png')} />
          <Text style={styles.card1Text}>Cultural Council</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Science & Technology Council')
          }}
        >
          <Image source={require('../../assets/images/scitech_council.png')} style={styles.orgIcon} />
          <Text style={styles.card2Text}>Science & Technology Council</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Sports Council')
          }}
        >
          <Image source={require('../../assets/images/sports_council.png')} style={{ width: '50%', height: '40%' }} />
          <Text style={styles.card3Text}>Sports Council</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card4}
          onPress={() => {
            navigation.navigate('COSHA Committee')
          }}
        >
          <Image source={require('../../assets/images/cosha.png')} />
          <Text style={styles.card4Text}>COSHA Committee</Text>
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: colors.text }]}>Student Fests</Text>
        <TouchableOpacity
          style={styles.card1}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"fests", clubname:"vivacity"})
          }}
        >
          <Image source={require('../../assets/cult/vivacity.png')} />
          <Text style={styles.card1Text}>Vivacity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"fests", clubname:"plinth"})
          }}
        >
          <Image source={require('../../assets/scitech/plinth.png')} style={styles.orgIcon} />
          <Text style={styles.card2Text}>Plinth</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card3}
          onPress={() => {
            navigation.navigate('Club Fest', {clubtype:"fests", clubname:"desportivos"})
          }}
        >
          <Image source={require('../../assets/sports/despo.png')} />
          <Text style={styles.card3Text}>Desportivos</Text>
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
    height: 45,
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
    width: 90,
    height: 90,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    width: '100%',
    textAlign: 'center',
  },
})