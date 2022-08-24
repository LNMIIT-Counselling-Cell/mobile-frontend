import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function PreviousOutpassScreen({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.item}>
          <Text>25-08-2022</Text>
          <Text>8473456324563</Text>
        </View>
        <View style={styles.item}>
          <Text>25-08-2022</Text>
          <Text>8473456324563</Text>
        </View>
        <View style={styles.item}>
          <Text>25-08-2022</Text>
          <Text>8473456324563</Text>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#E8E7E7',
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
  }
});
