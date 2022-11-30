import React, {useEffect} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { useTheme } from '@react-navigation/native';
import Documents from '../../components/Documents';

export const ExtraPDFScreen = ({route, navigation}) => {

  const { colors } = useTheme()
  useEffect(()=>{
    navigation.setOptions({ title: route.params?.headerName });
  }, [])

  // const source = { uri: 'bundle-assets://pdf/'+route.params?.pdfName+'.pdf' };
  const source = Documents[route.params?.pdfName];

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        trustAllCerts={false}
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