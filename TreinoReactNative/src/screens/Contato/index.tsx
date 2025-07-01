import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Contato() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.texto}>Contato1</Text>
      </View>
      <View style={styles.container2}>
        <Text style={[styles.texto, { color: "red" }]}>Contato2</Text>
      </View>
      <View style={styles.container2}>
        <Text style={{ color: "green", fontWeight: "bold" }}>Contato3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "blue",
    margin: 10,
    backgroundColor: "yellow",
  },

  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "grey",
    margin: 15,
    padding: 10,
    backgroundColor: "gold",
    textDecorationColor: "red",
  },

  texto: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
