import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { PersonCard } from '../../components/PersonCard'

export const HeadOfDepartmentScreen = () => {

  const data = [
    {
      name: "Dr. Preety Singh",
      post: "CSE",
      phno: '',
      emailId: "preety@lnmiit.ac.in"
    },
    {
      name: "Dr. Ashok Kumar Dargar",
      post: "MME",
      phno: '+919829686661',
      emailId: "ashok.dargar@lnmiit.ac.in"
    },
    {
      name: "Dr. Pratibha Garg",
      post: "MATHEMATICS",
      phno: '',
      emailId: "pratibhag@lnmiit.ac.in"
    },
    {
      name: "Dr. Subhayan Biswas",
      post: "PHYSICS",
      phno: '',
      emailId: "subhayan@lnmiit.ac.in"
    },
    {
      name: "Dr. Usha Kanoongo",
      post: "HSS",
      phno: '+919950656775',
      emailId: 'usha.kanoongo@lnmiit.ac.in'
    },
    {
      name: "Prof. Raghuvir Tomar",
      post: "ECE",
      phno: '',
      emailId: "rtomar@lnmiit.ac.in"
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