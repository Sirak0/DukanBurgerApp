import react from "react";
import { View, Text, StyleSheet, Image ,TouchableOpacity,CheckBox,ActivityIndicator} from "react-native";
import { Component } from "react/cjs/react.production.min";
import Main from "../Main";
import Page1 from "../Page1/Page1";


export default class Loading extends Component{
  constructor(){
  super()
  this.state = {
    showME:true
  }
}

  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        showME:false
      })
    },3000)
  }
  render(){
  return (
    <View style={styles.container}>
    {
      this.state.showME ?
      <View style={styles.imgView}>
      <Image style={styles.tinyLogo}
      source={require('./img/logo.png')} />
      </View>
      :
      <Main/>
    }
      
    </View>
  );
  }
}
var styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
  imgView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 400,
    height: 400,
  },
});
