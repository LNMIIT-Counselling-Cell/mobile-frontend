import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../components/Context';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import axios from 'axios';
import { getToken } from '../../utils/Token';
import { useTheme } from '@react-navigation/native';
import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";
import CustomIcon from '../../components/CustomIcon';
import { REACT_APP_PROD_URL } from '@env'

export default function OutpassScreen({ navigation }) {

  const { colors } = useTheme()

  const [room, setRoom] = useState('');
  const [purpose, setPurpose] = useState('');
  const [transport, setTransport] = useState('');

  const { usrInfo } = useContext(AuthContext)

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const [isLoadingGen, setIsLoadingGen] = useState(false);
  const [isLoadingPrev, setIsLoadingPrev] = useState(false);

  // This function will be triggered when the button is pressed
  const toggleLoadingGen = () => {
    setIsLoadingGen(!isLoadingGen);
  };

  const toggleLoadingPrev = () => {
    setIsLoadingPrev(!isLoadingPrev);
  };

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

  const [hostel, setHostel] = useState(null);

  // const resetForm = () => {
  //   setHostel(null);
  //   setRoom('')
  //   setPurpose('')
  //   setTransport('')
  //   setFromDate(new Date())
  //   setToDate(new Date())
  // }

  // const data = [
  //   { label: 'GH', value: 'GH' },
  //   { label: 'BH 1', value: 'BH 1' },
  //   { label: 'BH 2', value: 'BH 2' },
  //   { label: 'BH 3', value: 'BH 3' },
  //   { label: 'BH 4', value: 'BH 4' },
  // ];

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: 'blue' }]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

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
    if (hostel !== null && room !== '' && purpose !== '' && transport !== '') {
      return true
    }
    else {
      return false
    }
  }

  const bodyParameters = {
    hostel: hostel,
    roomno: room,
    purpose: purpose,
    transport: transport,
    from_time: fromDate,
    to_time: toDate
  };

  const staticData = [
    {
      id: 0,
      size: 25,
      fillColor: "#FFCBA6",
      unfillColor: "#FFFFFF",
      text: "BH1",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    },
    {
      id: 1,
      size: 25,
      fillColor: "#C3B0FF",
      unfillColor: "#FFFFFF",
      text: "BH2",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    },
    {
      id: 2,
      size: 25,
      fillColor: "#A6E6FF",
      unfillColor: "#FFFFFF",
      text: "BH3",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    },
    {
      id: 3,
      size: 25,
      fillColor: "#FEB2C3",
      unfillColor: "#FFFFFF",
      text: "BH4",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    },
    {
      id: 4,
      size: 25,
      fillColor: "#47F4BC",
      unfillColor: "#FFFFFF",
      text: "GH",
      textStyle: [styles.checkBoxText, StyleSheet.create({ color: colors.text })]
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingDayDate}>
          <Text style={[styles.headingDate, { color: colors.text }]}>{formattedToday}</Text>
          <Text style={[styles.headingDay, { color: colors.text }]}>{dayName}</Text>
        </View>

        <View style={[styles.form, { backgroundColor: colors.cardBG }]}>
          <Text style={[{ color: colors.text }]}>Name : {usrInfo.userData.name}</Text>
          <View style={styles.item}>
            <Text style={[{ color: colors.text }]}>Hostel :</Text>
            {/* {renderLabel()} */}

            <BouncyCheckboxGroup
              data={staticData}
              style={styles.checkBoxes}
              checkboxProps={styles.checkstyle}
              onChange={(selectedItem) => {
                setHostel(selectedItem.text)
                console.log("SelectedItem: ", selectedItem.text);
              }}
            />

            {/* <Dropdown
              style={[styles.dropdown, { backgroundColor: colors.cardBG }]}
              placeholderStyle={[styles.placeholderStyle, { color: colors.text }]}
              selectedTextStyle={[styles.selectedTextStyle, { color: colors.text }]}
              inputSearchStyle={[styles.inputSearchStyle, { color: colors.text }]}
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
            /> */}

          </View>
          <View style={styles.item}>
            <Text style={[{ color: colors.text }]}>Room No :</Text>
            <TextInput
              style={[styles.formInput, { color: colors.text }, { backgroundColor: colors.background }]}
              value={room}
              onChangeText={setRoom}
            />
          </View>
          <View style={styles.item}>
            <Text style={[{ color: colors.text }]}>Purpose :</Text>
            <TextInput
              style={[styles.formInput, { color: colors.text }, { backgroundColor: colors.background }]}
              value={purpose}
              onChangeText={setPurpose}
            />
          </View>
          <View style={styles.item}>
            <Text style={[{ color: colors.text }]}>Transport :</Text>
            <TextInput
              style={[styles.formInput, { color: colors.text }, { backgroundColor: colors.background }]}
              value={transport}
              onChangeText={setTransport}
            />
          </View>
          <View style={styles.item}>
            <Text style={[{ color: colors.text }]}>From Time :</Text>
            <View style={[styles.timeBox, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>{formatAMPM(fromDate)}</Text>
              <TouchableOpacity
                onPress={showTimepickerFrom}
              >
                <CustomIcon
                  name={'clock'}
                  size={24}
                  color={colors.iconActiveColor} />
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.item}>
            <Text style={[{ color: colors.text }]}>To Time :</Text>
            <View style={[styles.timeBox, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>{formatAMPM(toDate)}</Text>
              <TouchableOpacity
                onPress={showTimepickerTo}
              >
                <CustomIcon
                  name={'clock'}
                  size={24}
                  color={colors.iconActiveColor} />
              </TouchableOpacity>
            </View>

          </View>
          {/* <View style={styles.itemReset}>
            <TouchableOpacity
              style={[styles.resetBtn, { backgroundColor: colors.background }]}
              onPress={() => resetForm()}
            >
              <View style={styles.resetBox}>
                <Text style={[{ color: colors.text }]}>Reset</Text>
                <Image
                  source={require('../../assets/icons/outline_restart_alt_black_24dp.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }} />
              </View>
            </TouchableOpacity>
          </View> */}
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
                      toggleLoadingGen()
                      const token = await getToken();
                      await axios.post(process.env.REACT_APP_PROD_URL + 'generateoutpass', bodyParameters, {
                        headers: {
                          'Authorization': `Bearer ${token}`,
                        }
                      })
                        .then(response => {
                          const formData = {
                            hostel: hostel,
                            roomno: room,
                            purpose: purpose,
                            transport: transport,
                            from_time: fromDate,
                            to_time: toDate,
                            token: response.data.token
                          }
                          setIsLoadingGen(false)
                          navigation.navigate('Generated Outpass', { objData: formData })
                        })
                        .catch(err => {
                          setIsLoadingGen(false)
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
          <View style={styles.btn}>
            {isLoadingGen && <ActivityIndicator size="large" color="#FF6A00" />}
            <Text style={styles.genText}> {isLoadingGen ? "Generating ..." : "Generate Outpass"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prev}
          onPress={async () => {
            toggleLoadingPrev()
            const token = await getToken()
            await axios.get(process.env.REACT_APP_PROD_URL + 'previousoutpass', {
              headers: {
                'Authorization': `Bearer ${token}`,
              }
            })
              .then(response => {
                setIsLoadingPrev(false)
                navigation.navigate('Previous Outpass', { objData: response.data.outpass_record })
              })
              .catch(err => {
                setIsLoadingPrev(false)
                console.log("errors in response ", err);
              });
          }}
        >
          <View style={styles.btn}>
            {isLoadingPrev && <ActivityIndicator size="large" color="#551FFF" />}
            <Text style={styles.prevText}> {isLoadingPrev ? "Fetching ..." : "Previous Outpass"}</Text>
          </View>
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
    color: '#FF6A00',
    fontFamily: 'Poppins-Medium',
  },
  prev: {
    backgroundColor: '#C3B0FF',
    width: '85%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  prevText: {
    color: '#551FFF',
    fontFamily: 'Poppins-Medium',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  checkBoxes: {
    // flexDirection: "column",
    margin: 20,
    marginVertical: 0,
    width: 200,
    flexWrap: "wrap",
    // height: 150,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  checkstyle: {
    paddingVertical: 10,
  },
  checkBoxText: {
    textDecorationLine: "none",
  },
});
