import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { PersonCard } from '../../components/PersonCard'

export const HeadOfDepartmentScreen = () => {

  const data = [
    {
      name: "Dr. Jayaprakash Kar",
      post: "CSE",
      phno: '',
      emailId: "jayaprakashkar@lnmiit.ac.in"
    },
    {
      name: "Dr. Sunil Kumar",
      post: "CCE",
      phno: '',
      emailId: "sunil@lnmiit.ac.in"
    },
    {
      name: "Dr. Nikhil Sharma",
      post: "ECE",
      phno: '',
      emailId: "nikhil.sharma@lnmiit.ac.in"
    },
    {
      name: "Dr. Mohit Makkar",
      post: "MME",
      phno: '',
      emailId: "mohit.makkar@lnmiit.ac.in"
    },
    {
      name: "Dr. Manish Garg",
      post: "MATHEMATICS",
      phno: '',
      emailId: "manishgarg@lnmiit.ac.in"
    },
    {
      name: "Dr. Anjishnu Sarkar",
      post: "PHYSICS",
      phno: '',
      emailId: "anjishnu@lnmiit.ac.in"
    },
    {
      name: "Dr. Surinder Singh Nehra",
      post: "HSS",
      phno: '',
      emailId: 'surinder.nehra@lnmiit.ac.in'
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