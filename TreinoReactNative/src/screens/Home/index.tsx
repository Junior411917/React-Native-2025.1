import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>Home</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.container3}>Figura ilustrativa</Text>
        <Image
          style={{
            width: 150,
            height: 150,
            borderWidth: 1,
            borderColor: "red",
          }}
          source={require("../../../assets/icon.png")}
        />
      </View>
      <View style={styles.container2}>
        <Text>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "grey",
    margin: 10,
  },

  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "grey",
    margin: 10,
  },

  container3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "grey",
    margin: 10,
  },
});
