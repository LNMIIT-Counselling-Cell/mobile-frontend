import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { PersonCard } from '../../components/PersonCard'

export const HostelContactsScreen = () => {

  const data = require("../../assets/json/global.json").hostelContacts;

  const Item = ({ name, position, phone, email }) => (
    <PersonCard name={name} position={position} phone={phone} email={email} />
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} position={item.position} phone={item.phone} email={item.email} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.position}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  }
})