import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, RefreshControl, StyleSheet, Text, TouchableOpacity, View, Alert, Linking } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import { getToken } from '../../utils/Token';
import { FlatList } from "react-native-bidirectional-infinite-scroll";
import ImageView from "react-native-image-viewing";
import ParsedText from 'react-native-parsed-text';

export default function HomeScreen({ navigation }) {

  const { colors } = useTheme()

  const [data, setData] = useState([])

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUrlPress = (url, matchIndex /*: number*/) => {
    Linking.openURL(url);
  }

  const handlePhonePress = (phone, matchIndex /*: number*/) => {
    Linking.openURL(`tel: ${phone}`);
  }

  // const handleNamePress = (name, matchIndex /*: number*/) => {
  //   Alert.alert(`Hello ${name}`);
  // }

  const handleEmailPress = (email, matchIndex /*: number*/) => {
    Linking.openURL(`mailto: ${email}`);
  }

  // const renderText = (matchingString, matches) => {
  //   // matches => ["[@michel:5455345]", "@michel", "5455345"]
  //   let pattern = /\[(@[^:]+):([^\]]+)\]/i;
  //   let match = matchingString.match(pattern);
  //   return `^^${match[1]}^^`;
  // }

  const Item = ({ imageurl, title, description, orgiconurl, org }) => {
    const [eachVisible, setEachVisible] = useState(false);
    return (
      <View style={[styles.post, { backgroundColor: colors.cardBG }]}>
        <View style={styles.postheader}>
          <View>
            <Image source={{ uri: `${orgiconurl.split("file/d/").join("uc?export=view&id=").split("/view")[0]}` }} style={styles.orgicon} />
          </View>
          <View style={styles.header}>
            <Text style={[styles.orgText, { color: colors.text }]}>{org}</Text>
            <Text style={[styles.titleText, { color: colors.text }]}>{title}</Text>
          </View>
        </View>
        <View>
          <ReadMore numberOfLines={5} seeMoreStyle={{ color: colors.text, fontWeight: 'bold' }} seeLessStyle={{ color: colors.text, fontWeight: 'bold' }} style={[styles.desc, { color: colors.text }]}>
            <ParsedText
              style={styles.text}
              parse={
                [
                  { type: 'url', style: styles.url, onPress: (url, index) => handleUrlPress(url, index) },
                  { type: 'phone', style: styles.phone, onPress: (phone, index) => handlePhonePress(phone, index) },
                  { type: 'email', style: styles.email, onPress: (email, index) => handleEmailPress(email, index) },
                  // {pattern: /Bob|David/,              style: styles.name, onPress: this.handleNamePress},
                  // {pattern: /\[(@[^:]+):([^\]]+)\]/i, style: styles.username, onPress: this.handleNamePress, renderText: this.renderText},
                  // {pattern: /42/,                     style: styles.magicNumber},
                  // {pattern: /#(\w+)/,                 style: styles.hashTag},
                ]
              }
              childrenProps={{ allowFontScaling: false }}
            >
              {`${description}`}
            </ParsedText>
          </ReadMore>
        </View>
        <Pressable style={styles.postimg} onPress={() => {
          setEachVisible(true);
        }}>
          <Image source={{ uri: `${imageurl.split("file/d/").join("uc?export=view&id=").split("/view")[0]}` }} style={styles.imageurl} />
          <ImageView
            images={[{ uri: `${imageurl.split("file/d/").join("uc?export=view&id=").split("/view")[0]}` }]}
            imageIndex={0}
            visible={eachVisible}
            onRequestClose={() => setEachVisible(false)}
            doubleTapToZoomEnabled={false}
            animationType={'slide'}
            backgroundColor={colors.cardBG}
          />
        </Pressable>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} imageurl={item.imageurl} org={item.organization} orgiconurl={item.orgiconurl} />
  );

  const getPosts = async () => {
    setLoading(true);
    const token = await getToken()
    axios.get('https://ccelltestapi.herokuapp.com/allpostsmob', {
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
    axios.get('https://ccelltestapi.herokuapp.com/allpostsmob', {
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
            navigation.navigate("ExtraPDF", {headerName:"Councelling Process", pdfName:"CounsellingProcess"})
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  post: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 15,
    padding: 10,
    backgroundColor: '#E8E7E7',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    marginVertical: 10,
  },
  imageurl: {
    height: 350,
    width: 350,
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
  url: {
    textDecorationLine: 'underline',
  },
  phone: {
    textDecorationLine: 'underline',
  },
  email: {
    textDecorationLine: 'underline',
  }
})