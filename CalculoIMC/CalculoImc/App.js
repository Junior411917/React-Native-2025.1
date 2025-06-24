import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "./src/components/Header";
import Main from "./src/components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1877f2" barStyle="light-content" />
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
