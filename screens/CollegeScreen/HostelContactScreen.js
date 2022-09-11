import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { PersonCard } from '../../components/PersonCard'

export const HostelContactsScreen = () => {

  const data = [
    {
      name: "Dr. Ajit Patel",
      post: "Chief Warden",
      phno: '+919461690130',
      emailId: "chief-warden@lnmiit.ac.in"
    },
    {
      name: "Dr. Pomita Ghoshal",
      post: "Warden GH",
      phno: '+917597492213',
      emailId: "pghoshal@lnmiit.ac.in"
    },
    {
      name: "Ramswaroop Sharma",
      post: "Supritendent - Admin",
      phno: '+919460435108',
      emailId: "ramsharma@lnmiit.ac.in"
    },
    {
      name: "Dr. Manish Garg",
      post: "BH1 Warden",
      phno: '+917976937380',
      emailId: "warden-bh1@lnmiit.ac.in"
    },
    {
      name: "Dr. Mohit Makkar",
      post: "BH2 Warden",
      phno: '+919212627275',
      emailId: "warden-bh2@lnmiit.ac.in"
    },
    {
      name: "Dr. Ashok Garai",
      post: "BH3 Warden",
      phno: '+917340307452',
      emailId: "warden-bh3@lnmiit.ac.in"
    },
    {
      name: "Dr. Nabyendu Das",
      post: "BH4 Warden",
      phno: '+918238968902',
      emailId: "warden-bh4@lnmiit.ac.in"
    }
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