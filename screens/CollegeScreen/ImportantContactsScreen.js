import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { PersonCard } from '../../components/PersonCard'

export const ImportantContactsScreen = () => {

  const data = [
    {
      name: "Rahul Banerjee",
      post: "Director",
      phno: '01415189213',
      emailId: "director@lnmiit.ac.in"
    },
    {
      name: "Dr Narendra Kumar",
      post: "Associate Dean of Academic Affairs",
      phno: '+919414061624',
      emailId: "assoc.doaa@lnmiit.ac.in"
    },
    {
      name: "Rajeev Saxena",
      post: "Assistant Registrar - Academic",
      phno: '+919829575700',
      emailId: "aracademic@lnmiit.ac.in"
    },
    {
      name: "Giriraj Sharma",
      post: "Finance Assistant",
      phno: '+919928993741',
      emailId: "gsarma@lnmiit.ac.in"
    },
    {
      name: "Mukesh Kumar Sharma",
      post: "System Administrator",
      phno: '+919462938977',
      emailId: "it.manager@lnmiit.ac.in"
    },
    {
      name: "Samar Singh",
      post: "Assistant Registrar",
      phno: '+917597333722',
      emailId: "arss@lnmiit.ac.in"
    },
    {
      name: "Dr. Chand Singh Panwar",
      post: "Medical Officer",
      phno: '+917737453601',
      emailId: "medicalofficer@lnmiit.ac.in"
    },
    {
      name: "Nahar Singh Choudhary",
      post: "Male Nurse",
      phno: '+917221863068'
    },
    {
      name: "Pushpa Devi",
      post: "Female Nurse",
      phno: '+918764038742'
    },
  ]

  const Item = ({ name, post, phno, emailId }) => (
    <PersonCard name={name} position={post} phone={phno} email={emailId} />
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} post={item.post} phno={item.phno} emailId={item.emailId} />
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