import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function Header({ title }) {

  const { colors } = useTheme()

  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../assets/logos/ccell.png')} style={{
          width: 24,
          height: 24
        }} />
      </TouchableOpacity>
      <View>
        <Text style={[styles.headerText, { color: colors.text }]}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings")
        }}
      >
        <Image source={require('../assets/icons/settings.png')} style={{
          width: 24,
          height: 24
        }} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // width: Dimensions.get('screen').width,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  }
})