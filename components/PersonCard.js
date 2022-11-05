import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const PersonCard = ({ name, position, phone, email }) => {

  const { colors } = useTheme()

  return (
    <View style={[styles.card, { backgroundColor: colors.cardBG }]}>
      <View>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.position, { color: colors.text }]}>{position}</Text>
      </View>
      <View style={styles.cta}>
        <TouchableOpacity
          style={styles.ctaicon}
          onPress={() => {
            Linking.openURL(`tel:${phone}`)
          }}
        >
          <Image source={require('../assets/icons/call_white.png')} style={styles.ctaiconImg}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ctaicon}
          onPress={() => {
            Linking.openURL(`mailto:${email}`)
          }}
        >
          <Image source={require('../assets/icons/mail_white.png')} style={styles.ctaiconImg}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E7E7',
    paddingHorizontal: 10,
    paddingRight: 5,
    paddingLeft: 15,
    paddingVertical: 3,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginHorizontal: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  position: {
    fontSize: 12,
  },
  cta: {
    display: 'flex',
    flexDirection: 'row',
  },
  ctaicon: {
    marginRight: 10,
    backgroundColor: 'black',
    borderRadius: 100,
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151211'
  },
  ctaiconImg: {
    width: 16,
    height: 16,
  }
})