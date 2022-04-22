import react from "react";
import { View,Pressable, Text, StyleSheet, ImageBackground, Image } from "react-native";

const image = require("./image.png");
export default function Page1() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <View style={styles.cont}>
        <Image
          style={styles.image1}
          source={require("../Loading/img/logo.png")}
        />
        <Text style={styles.text}>World's 
        Greatest {"\n"}
        Burgers</Text>
        <Pressable
        title="Press me"
        style={styles.butt}
        onPress={() => this.props.navigation.navigate('About')}
      ></Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "102%",
    height: 854,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    

  },
  main: {
    width: "102%",
    height:854,
    position:"absolute"
   },
  image: {
    width: 400,
    height: 854,
    
  },
  cont: {
    width: "100%",
    height: "100%",
    zIndex: 2,
    alignItems: "center",
  },
  image1: {
    width: 400,
    height: 400,
    zIndex: 1,
    bottom: 50,
  },
  text:{
      color:"#FDF6CA",
      bottom: -200,
      fontSize:35,
      textAlign:"center",
      position: "relative",
      fontWeight:"800",
      },
      butt:{
        width: 300,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#E6772A',
        bottom: -250,
        color: "#000"
      }
});
