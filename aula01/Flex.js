import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d1d1d1" barStyle="light-content" />
      <View style={{flex:1 , backgroundColor: "blue" }}>
      </View>

      <View style={{ flex:8, backgroundColor: "#fff" }}>
        <Text>Oiiii</Text>
      </View>

      <View style={{ flex:1, backgroundColor: "red" }}>
        <Text>Oiiii</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
