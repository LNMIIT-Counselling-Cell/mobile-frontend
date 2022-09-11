import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CollegeScreen({ navigation }) {

  const dirText2 = `
  The Institute, in spite of being young (founded in 2002, jointly by the Government of Rajasthan and the Lakshmi & Usha Mittal Foundation in the public-private partnership mode) is considered as one of the best institutions in its chosen areas of higher learning, both in the state and the country. In addition to having been accredited by the National Assessment & Accreditation Council (NAAC) as an ‘A’ grade institution, the LNMIIT has been ranked fairly high by many different agencies in the recent past as may be noticed elsewhere on the official web-portal.
  
  The Institute takes pride in its eco-system that aims to groom incoming students into academically strong yet well-rounded personality based professionals who could adapt themselves to the challenges posed by the ever-changing world and working environments.
  
  If you are an aspiring student, we welcome you to take a good look at our website to know more about what the Institute has to offer and preferably consider visiting the campus for getting to know it even better by getting the first hand feel of its ambience and interacting with faculty and students so that you could take a well-informed decision.
  
  If you have already applied to the LNMIIT, have been offered an admission and accepted the offer, Congratulations and Welcome to this new home of yours for next few years!`

  const { colors } = useTheme()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={[styles.headerText, { color: colors.text }]}>Important Documents</Text>
        <View style={styles.subsection}>
          <TouchableOpacity
            style={styles.quick1}
            onPress={() => {
              navigation.navigate('Holiday Calendar')
            }}
          >
            <Text style={styles.q1Text}>Holiday Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick2}
            onPress={() => {
              navigation.navigate('Bus Time Table')
            }}
          >
            <Text style={styles.q2Text}>Bus Time Table</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick3}
            onPress={() => {
              navigation.navigate('Mess Menu')
            }}
          >
            <Text style={styles.q3Text}>Mess Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick4}
          >
            <Text style={styles.q4Text}>SOPs</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.headerText, { color: colors.text }]}>Faculties</Text>
        <View style={styles.subsection}>
          <TouchableOpacity
            style={styles.quick1}
            onPress={() => {
              navigation.navigate('Important Contacts')
            }}
          >
            <Text style={styles.q1Text}>Important Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick2}
            onPress={() => {
              navigation.navigate('Head of Departments')
            }}
          >
            <Text style={styles.q2Text}>HoDs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick3}
            onPress={() => {
              navigation.navigate('Head of Sections')
            }}
          >
            <Text style={styles.q3Text}>Head of Sections</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick4}
            onPress={() => {
              navigation.navigate('Hostel Contacts')
            }}
          >
            <Text style={styles.q4Text}>Hostel Contacts</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.headerText, { color: colors.text }]}>Miscellanous</Text>
        <View style={styles.subsection}>
          <TouchableOpacity
            style={styles.quick1}
          >
            <Text style={styles.q1Text}>Campus Map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick2}
          >
            <Text style={styles.q2Text}>Academic Area Map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick3}
          >
            <Text style={styles.q3Text}>Curriculum</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quick4}
          >
            <Text style={styles.q4Text}>Important Links</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.headerText, { color: colors.text }]}>Director's Message</Text>
      <View style={styles.director}>
        <View style={styles.dirTextBox}>
          <Text style={[styles.dirText1, { color: colors.text }]}>Welcome to The LNM Institute of Information Technology (LNMIIT), Jaipur! The LNMIIT is an institution of higher learning focused in select areas of Computing, Communication, ICT, Electronics and carefully chosen traditional engineering and sciences with an innovative blend of interdisciplinary flavor and contemporary relevance.</Text>
        </View>
        <View style={styles.dirsection}>
          <Image source={require('../../assets/images/Rahul_sir.png')} style={styles.dirimg} />
          <Text style={[styles.dirname, { color: colors.text }]}>Prof. Rahul Banerjee</Text>
        </View>
      </View>
      <Text style={[styles.dirText2, { color: colors.text }]}>{dirText2}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  section: {
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subsection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quick1: {
    backgroundColor: '#FFCBA6',
    width: '22.5%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick2: {
    backgroundColor: '#C3B0FF',
    width: '22.5%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  quick3: {
    backgroundColor: '#A6E6FF',
    width: '22.5%',
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
  dirimg: {
    width: 100,
    height: 100,
  },
  director: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dirsection: {
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dirTextBox: {
    width: '65%',
  },
  dirText1: {
    textAlign: 'justify',
    paddingRight: 10,
  },
  dirText2: {
    textAlign: 'justify',
    marginBottom: 10,
  },
  dirname: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
  }
})