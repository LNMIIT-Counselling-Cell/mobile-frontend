import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { useTheme } from '@react-navigation/native';

export const TimeTableIndividualScreen = ({route, navigation}) => {

  const { colors } = useTheme()
  const headerName = route.params?.branch + " Year-" + route.params?.year;
  navigation.setOptions({ title: headerName })
  const timetablename = route.params?.branch+"_"+route.params?.year+".pdf";

  const source = { uri: 'bundle-assets://pdf/'+timetablename };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={[styles.pdf, { backgroundColor: colors.cardBG }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});