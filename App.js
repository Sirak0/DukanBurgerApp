
import { StyleSheet, View } from "react-native";
import Loading from "./src/Loading/Loading";


export default function App() {
  return (
    <View style={styles.container}>
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  
});
