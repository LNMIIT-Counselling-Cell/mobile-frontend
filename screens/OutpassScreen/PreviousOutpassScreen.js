import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function PreviousOutpassScreen({ navigation, route }) {

  const { colors } = useTheme()

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

  const Item = ({ token, date, status }) => (
    <View style={[styles.item, { backgroundColor: colors.cardBG }]}>
      <View style={styles.itemRow}>
        <Text style={{ color: colors.text }}>{getDate(date)}</Text>
        <Text style={{ color: colors.text }}>{status === 'Approved' ? token : 'Approval Pending'}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item token={item.token} date={item.created_at} status={item.status} />
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
