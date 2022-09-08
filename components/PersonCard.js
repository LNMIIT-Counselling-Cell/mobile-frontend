import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const PersonCard = ({ name, position }) => {

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
        >
          <Image source={require('../assets/images/call.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ctaicon}
        >
          <Image source={require('../assets/images/gmail.png')} />
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
    paddingLeft: 15,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 10,
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
  }
})