import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  StatusBar,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const handleInputText = (texto) => {
    setInputText(texto);
  };

  const handleButtonPress = () => {
    setData([...data, { key: inputText }]);
    setInputText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        onChangeText={handleInputText}
        value={inputText}
      />
      <Button onPress={handleButtonPress} title="Adicionar Novo" />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
});
