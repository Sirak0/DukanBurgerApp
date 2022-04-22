import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Page1 from './Page1/Page1';
import { NavigationContainer } from '@react-navigation/native';
import Page2 from './Page2/Page2';



export default function Main() {
  return (
    <View style={styles.container}>
     <NavigationContainer>
      <Page1/>
      <Page2/>
    </NavigationContainer>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   width:'102%',
   height:'102%',
  },
});
