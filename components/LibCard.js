import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const LibCard = ({ title, ver }) => {

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={require("../assets/icons/code_white.png")} style={styles.img} />
      </View>
      <View style={styles.right}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.version, { color: colors.text }]}>Version: {ver}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
  left: {
    marginRight: 10,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  title: {
    fontWeight: 'bold',
  },
  version: {
    fontSize: 12,
  }
})
