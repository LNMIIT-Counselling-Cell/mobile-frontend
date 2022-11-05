import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { LibCard } from '../components/LibCard'

export const OpenSourceLibScreen = () => {
  
  const depends = require("../package.json").dependencies;
  let data = [];
  Object.entries(depends).map(([k, v]) => {
    data.push({ title: k, ver: v });
  });

  const Item = ({ title, ver }) => (
    <LibCard title={title} ver={ver} />
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} ver={item.ver} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  }
})