import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import { getToken } from '../../utils/Token';
import { FlatList } from "react-native-bidirectional-infinite-scroll";

export default function HomeScreen({ navigation }) {

  const { colors } = useTheme()

  const [data, setData] = useState([])

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const Item = ({ imageurl, title, description, orgiconurl, org }) => (
    <View style={[styles.post, { backgroundColor: colors.cardBG }]}>
      <View style={styles.postheader}>
        <View>
          <Image source={{ uri: `${orgiconurl}` }} style={styles.orgicon} />
        </View>
        <View style={styles.header}>
          <Text style={[styles.orgText, { color: colors.text }]}>{org}</Text>
          <Text style={[styles.titleText, { color: colors.text }]}>{title}</Text>
        </View>
      </View>
      <View>
        <ReadMore numberOfLines={5} seeMoreStyle={{ color: colors.text, fontWeight: 'bold' }} seeLessStyle={{ color: colors.text, fontWeight: 'bold' }} style={[styles.desc, { color: colors.text }]}>
          {
            `${description}`
          }
        </ReadMore>
      </View>
      <View style={styles.postimg}>
        <Image source={{ uri: `${imageurl}` }} style={styles.imageurl} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} imageurl={item.imageurl} org={item.organization} orgiconurl={item.orgiconurl} />
  );

  const getPosts = async () => {
    setLoading(true);
    const token = await getToken()
    axios.get('http://192.168.167.252:5000/allpostsmob', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        console.log(response.data.posts);
        setData(response.data.posts)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err);
      })
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const token = await getToken()
    axios.get('http://192.168.167.252:5000/allpostsmob', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => {
        console.log(response.data.posts);
        setData(response.data.posts)
        setRefreshing(false)
      })
      .catch(err => {
        console.log(err);
      })
  }, [refreshing]);

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.quickAccess}>
        <TouchableOpacity
          style={styles.quick1}
          onPress={() => {
            navigation.navigate("Today's Events")
          }}
        >
          <Image source={require('../../assets/images/todays_events.png')} />
          <Text style={styles.q1Text}>Today's Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quick2}
          onPress={() => {
            navigation.navigate("Menus")
          }}
        >
          <Image source={require('../../assets/images/menu.png')} />
          <Text style={styles.q2Text}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quick3}
          onPress={() => {
            navigation.navigate("Counselling Process")
          }}
        >
          <Image source={require('../../assets/images/counselling.png')} />
          <Text style={styles.q3Text}>Counselling Process</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quick4}
          onPress={() => {
            navigation.navigate("Time Tables")
          }}
        >
          <Image source={require('../../assets/images/timetable.png')} />
          <Text style={styles.q4Text}>Time Table</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size={'large'} style={styles.loading} />}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showDefaultLoadingIndicators={true} // optional
        onStartReachedThreshold={10} // optional
        onEndReachedThreshold={10}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    paddingBottom: 120,
  },
  quickAccess: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  quickIcons: {
    width: 35,
    height: 35,
  },
  quick1: {
    backgroundColor: '#FFCBA6',
    width: 85,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 8,
  },
  quick2: {
    backgroundColor: '#C3B0FF',
    width: 85,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 8,
  },
  quick3: {
    backgroundColor: '#A6E6FF',
    width: 85,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 8,
  },
  quick4: {
    backgroundColor: '#FEB2C3',
    width: 85,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
    paddingTop: 10,
    borderRadius: 8,
  },
  post: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 15,
    padding: 10,
    backgroundColor: '#E8E7E7',
    borderRadius: 8,
  },
  postheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  orgicon: {
    width: 35,
    height: 35,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    justifyContent: 'center',
    lineHeight: 3,
    // backgroundColor: 'red'
  },
  postimg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageurl: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  orgText: {
    lineHeight: 15,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 14,
  },
  q1Text: {
    color: '#FF6A00',
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  q2Text: {
    color: '#551FFF',
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  q3Text: {
    color: '#00B7FE',
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  q4Text: {
    color: '#FD2254',
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    fontFamily: 'Poppins-Medium',
  },
})