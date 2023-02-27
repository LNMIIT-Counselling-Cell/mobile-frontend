import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { PersonCard } from '../../components/PersonCard'

export const HeadOfDepartmentScreen = () => {

  const data = require("../../assets/json/global.json").headOfDepartments;

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
        keyExtractor={item => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  }
})