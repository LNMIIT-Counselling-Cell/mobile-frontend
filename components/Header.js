import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';

export default function Header({navigation, title}) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>About CCell</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  }
})