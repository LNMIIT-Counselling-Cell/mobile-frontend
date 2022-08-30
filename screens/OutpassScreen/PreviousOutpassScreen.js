import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function PreviousOutpassScreen({ navigation, route }) {

  const { objData } = route.params

  const DATA = objData

  const getDate = (createdDate) => {
    var dateUTC = new Date(createdDate);
    var dateUTC = dateUTC.getTime()
    var dateIST = new Date(dateUTC);
    //date shifting for IST timezone (+5 hours and 30 minutes)
    dateIST.setHours(dateIST.getHours() + 5);
    dateIST.setMinutes(dateIST.getMinutes() + 30);
    return dateIST.toISOString().replace(/T.*/, '').split('-').reverse().join('-');
  }

  const Item = ({ token, date }) => (
    <View style={styles.item}>
      <Text>{getDate(date)}</Text>
      <Text>{token}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item token={item.token} date={item.created_at} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  item: {
    width: 350,
    backgroundColor: '#E8E7E7',
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
