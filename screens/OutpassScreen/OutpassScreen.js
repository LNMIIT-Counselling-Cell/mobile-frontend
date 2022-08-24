import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function OutpassScreen({ navigation }) {

  const [hostel, setHostel] = useState('');
  const [room, setRoom] = useState('');
  const [purpose, setPurpose] = useState('');
  const [transport, setTransport] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingDayDate}>
          <Text style={styles.headingDate}>24-08-2022</Text>
          <Text style={styles.headingDay}>Wednesday</Text>
        </View>

        <View style={styles.form}>
          <Text>Name : Sriraj Behera</Text>
          <View style={styles.item}>
            <Text>Hostel :</Text>
            <TextInput
              style={styles.formInput}
              value={hostel}
              onChangeText={setHostel}
            />
          </View>
          <View style={styles.item}>
            <Text>Room No :</Text>
            <TextInput
              style={styles.formInput}
              value={room}
              onChangeText={setRoom}
            />
          </View>
          <View style={styles.item}>
            <Text>Purpose :</Text>
            <TextInput
              style={styles.formInput}
              value={purpose}
              onChangeText={setPurpose}
            />
          </View>
          <View style={styles.item}>
            <Text>Transport :</Text>
            <TextInput
              style={styles.formInput}
              value={transport}
              onChangeText={setTransport}
            />
          </View>
          <View style={styles.item}>
            <Text>From Time :</Text>
            <TextInput
              style={styles.formInput}
              value={fromTime}
              onChangeText={setFromTime}
            />
          </View>
          <View style={styles.item}>
            <Text>To Time :</Text>
            <TextInput
              style={styles.formInput}
              value={toTime}
              onChangeText={setToTime}
            />
          </View>
          <View style={styles.itemReset}>
            <TouchableOpacity
              style={styles.resetBtn}
            >
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.gen}
          onPress={() => navigation.push('Generated Outpass')}
        >
          <Text style={styles.genText}>Generate Outpass</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prev}
          onPress={() => navigation.push('Previous Outpass')}
        >
          <Text style={styles.prevText}>Previous Outpass</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  headingDayDate: {
    marginVertical: 20
  },
  form: {
    backgroundColor: '#E8E7E7',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '85%',
  },
  formInput: {
    width: 200,
    marginHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  gen: {
    backgroundColor: '#FFCBA6',
    width: '85%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 14,
  },
  genText: {
    color: '#FF6A00'
  },
  prev: {
    backgroundColor: '#C3B0FF',
    width: '85%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  prevText: {
    color: '#551FFF'
  },
  itemReset: {
    flexDirection: 'row-reverse',
    marginVertical: 10,
  },
  resetBtn: {
    backgroundColor: 'white',
    width: '20%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});
