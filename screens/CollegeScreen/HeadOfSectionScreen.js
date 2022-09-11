import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { PersonCard } from '../../components/PersonCard'

export const HeadOfSectionScreen = () => {

  const data = [
    {
      name: "Ashok Kumar Salecha",
      post: "Finance Officer - Accounts",
      phno: "01413526101",
      emailId: "finance@lnmiit.ac.in"
    },
    {
      name: "Ranjan Kumar",
      post: "Purchase Officer",
      phno: '',
      emailId: "purchase.officer@lnmiit.ac.in"
    },
    {
      name: "Ajeet Singh Rawat",
      post: "Assistant Registrar (Dean’s office)",
      phno: '',
      emailId: "ajeetsinghrawat@lnmiit.ac.in"
    },
    {
      name: "Manish Tyagi",
      post: "Junior Engineer (Civil) - Estate Management",
      phno: "01413526117",
      emailId: "jr.civilengineer@lnmiit.ac.in"
    },
    {
      name: "Chand Singh Panwar",
      post: "Resident Medical Officer",
      phno: "+917737453601",
      emailId: "cspanwar@lnmiit.ac.in"
    },
    {
      name: "Manuj Sharma",
      post: "Training And Placement Officer",
      phno: '+918696792550',
      emailId: "tpo@lnmiit.ac.in"
    },
    {
      name: "Mukesh Kumar Sharma",
      post: "System Administrator - IT",
      phno: '+919462938977',
      emailId: "system.administrator@lnmiit.ac.in"
    },
    {
      name: "Rajeev Saxena",
      post: "Assistant Registrar (Academic)",
      phno: "01415189211",
      emailId: "academicoffice@lnmiit.ac.in"
    },
    {
      name: "Raghuveer Singh Charan",
      post: "Sr. PTI - Administration",
      phno: '+919887135843',
      emailId: "raghuveersingh@lnmiit.ac.in"
    },
    {
      name: "Ram Swaroop Sharma",
      post: "Superintendent - Admin",
      phno: '+919460435108',
      emailId: "ramsharma@lnmiit.ac.in"
    },
    {
      name: "Samar Singh",
      post: "Assistant Registrar (Student Services)",
      phno: "01413526132",
      emailId: "samarsingh@lnmiit.ac.in"
    },
    {
      name: "Dr. Shweta Pandey",
      post: "Assistant Librarian and In-Charge",
      phno: "01413526121",
      emailId: "shweta.pandey@lnmiit.ac.in"
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