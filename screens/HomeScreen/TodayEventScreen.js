import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

export const TodayEventScreen = () => {

  const { colors } = useTheme()

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Text style={{ color: colors.text }}>Coming Soon!</Text>
    </View>
  )
}
