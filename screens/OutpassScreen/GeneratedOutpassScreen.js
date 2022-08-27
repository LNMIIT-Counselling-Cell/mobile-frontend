import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function GeneratedOutpassScreen({ navigation, route }) {

  const { objData } = route.params

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

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = dd + '-' + mm + '-' + yyyy;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[new Date().getDay()];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingDayDate}>
          <Text style={styles.headingDate}>{formattedToday}</Text>
          <Text style={styles.headingDay}>{dayName}</Text>
        </View>

        <View style={styles.form}>
          <Image style={styles.image} source={require("../../assets/images/generated_outpass.png")} />
          <Text style={styles.outpassgen}>Outpass Generated</Text>
          <Text style={styles.uniqueText}>Your Unique Token Number</Text>
          <Text style={styles.tokenText}>8473456324563</Text>

          <View style={styles.box}>
            <View style={styles.leftBox}>
              <View style={styles.innerbox}>
                <Text style={styles.primaryText}>Purpose</Text>
                <Text>: {objData.purpose}</Text>
              </View>
              <View style={styles.innerbox}>
                <Text style={styles.primaryText}>From</Text>
                <Text>: {formatAMPM(objData.fromTime)}</Text>
              </View>
            </View>
            <View style={styles.rightBox}>
              <View style={styles.innerbox}>
                <Text style={styles.primaryText}>Transport</Text>
                <Text>: {objData.transport}</Text>
              </View>
              <View style={styles.innerbox}>
                <Text style={styles.primaryText}>To</Text>
                <Text>: {formatAMPM(objData.toTime)}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.rules}>
          <Text>Rules & Regulations</Text>
          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingVertical: 50,
    borderRadius: 10,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },
  image: {
    width: 150,
    height: 150,
  },
  outpassgen: {
    marginVertical: 15,
    fontSize: 22,
  },
  uniqueText: {
    fontSize: 12,
  },
  tokenText: {
    fontSize: 32,
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  leftBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  rules: {
    width: '85%',
  },
  innerbox: {
    display: 'flex',
    flexDirection: 'row',
  },
  primaryText: {
    fontWeight: 'bold'
  }
});
