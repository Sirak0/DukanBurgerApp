import react from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Header(){
    return(
        <View style={styles.main}>
            <Text>Hello</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  main: {
   paddingTop:50,
   height:100,
   backgroundColor:"silver"
  },
});