App2.js;

import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("Rodrigo");

  function teste() {
    setNome("Ana");
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{nome}</Text>
      <TouchableOpacity onPress={teste}>
        <Text>Alterar Nome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
