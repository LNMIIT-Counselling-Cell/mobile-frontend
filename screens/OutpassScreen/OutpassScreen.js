import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { AuthContext } from '../../components/Context';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import {
  GoogleSignin
} from '@react-native-google-signin/google-signin';
import { getToken } from '../../utils/Token';

export default function OutpassScreen({ navigation }) {

  const [room, setRoom] = useState('');
  const [purpose, setPurpose] = useState('');
  const [transport, setTransport] = useState('');

  const { usrInfo, userToken, logout } = useContext(AuthContext)

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const onChangeFrom = (event, selectedDate) => {
    const currentDate = selectedDate;
    setFromDate(currentDate);
  };

  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate;
    setToDate(currentDate);
  };

  const showModeFrom = (currentMode) => {
    DateTimePickerAndroid.open({
      value: fromDate,
      onChange: onChangeFrom,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showModeTo = (currentMode) => {
    DateTimePickerAndroid.open({
      value: toDate,
      onChange: onChangeTo,
      mode: currentMode,
      is24Hour: false,
    });
  };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  const showTimepickerFrom = () => {
    showModeFrom('time');

  };

  const showTimepickerTo = () => {
    showModeTo('time');
  };

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const resetForm = () => {
    setValue(null);
    setRoom('')
    setPurpose('')
    setTransport('')
    setFromDate(new Date())
    setToDate(new Date())
  }

  const data = [
    { label: 'GH', value: 'GH' },
    { label: 'BH 1', value: 'BH 1' },
    { label: 'BH 2', value: 'BH 2' },
    { label: 'BH 3', value: 'BH 3' },
    { label: 'BH 4', value: 'BH 4' },
  ];

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = dd + '-' + mm + '-' + yyyy;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[new Date().getDay()];

  const isFormValid = () => {
    if (value !== null && room !== '' && purpose !== '' && transport !== '') {
      return true
    }
    else {
      return false
    }
  }

  const bodyParameters = {
    hostel: value,
    roomno: room,
    purpose: purpose,
    transport: transport,
    from_time: fromDate,
    to_time: toDate
  };

  const signOutFn = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("ho gya sign out")
      logout()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingDayDate}>
          <Text style={styles.headingDate}>{formattedToday}</Text>
          <Text style={styles.headingDay}>{dayName}</Text>
        </View>

        <View style={styles.form}>
          <Text>Name : {usrInfo.userData.name}</Text>
          <View style={styles.item}>
            <Text>Hostel :</Text>
            {/* {renderLabel()} */}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? 'blue' : 'black'}
            //     name="Safety"
            //     size={20}
            //   />
            // )}
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
            <View style={styles.timeBox}>
              <Text>{formatAMPM(fromDate)}</Text>
              <TouchableOpacity
                onPress={showTimepickerFrom}
              >
                <Image
                  source={require('../../assets/icons/outline_schedule_black_24dp.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }} />
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.item}>
            <Text>To Time :</Text>
            <View style={styles.timeBox}>
              <Text>{formatAMPM(toDate)}</Text>
              <TouchableOpacity
                onPress={showTimepickerTo}
              >
                <Image
                  source={require('../../assets/icons/outline_schedule_black_24dp.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }} />
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.itemReset}>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => resetForm()}
            >
              <View style={styles.resetBox}>
                <Text>Reset</Text>
                <Image
                  source={require('../../assets/icons/outline_restart_alt_black_24dp.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.gen}
          onPress={() => {
            if (isFormValid()) {
              Alert.alert(
                'Are you sure you want to proceed?',
                `Outpass once generated can't be deleted!`,
                [
                  { text: 'Cancel' },
                  {
                    text: 'OK', onPress: async () => {
                      const token = await getToken();
                      await axios.post('http://192.168.72.252:5000/generateoutpass', bodyParameters, {
                        headers: {
                          'Authorization': `Bearer ${token}`,
                        }
                      })
                        .then(response => {
                          const formData = {
                            hostel: value,
                            roomno: room,
                            purpose: purpose,
                            transport: transport,
                            from_time: fromDate,
                            to_time: toDate,
                            token: response.data.token
                          }
                          resetForm()
                          navigation.navigate('Generated Outpass', { objData: formData })
                        })
                        .catch(err => {
                          console.log("errors in response ", err);
                        });
                    }
                  }
                ],
                { cancelable: false }
              )
            }
            else {
              Alert.alert(
                'Oops!',
                `Please enter all the required details to generate outpass.`,
                [
                  { text: 'Ok' },
                ],
                { cancelable: false }
              )
            }
          }}
        >
          <Text style={styles.genText}>Generate Outpass</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prev}
          onPress={async () => {
            const token = await getToken()
            await axios.get('http://192.168.72.252:5000/previousoutpass', {
              headers: {
                'Authorization': `Bearer ${token}`,
              }
            })
              .then(response => {
                navigation.navigate('Previous Outpass', { objData: response.data.outpass_record })
              })
              .catch(err => {
                console.log("errors in response ", err);
              });
          }}
        >
          <Text style={styles.prevText}>Previous Outpass</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gen}
          onPress={() => signOutFn()}
        >
          <Text>Sign out yaha se</Text>
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
    marginVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 160,
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
    width: '25%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  resetBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  timeBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '35%',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 12,
    borderRadius: 5,
    paddingVertical: 5,
  },
  dropdown: {
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: 200,
    backgroundColor: 'white',
    marginHorizontal: 12,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
