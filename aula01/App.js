import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  StatusBar,
} from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (texto) => {
    setInputText(texto);
  };

  const handleButtonPress = () => {
    setData([...data, { key: inputText }]);
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="green" />
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        onChangeText={handleInputChange}
        value={inputText}
      />
      <Button title="Adicionar" onPress={handleButtonPress} />
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
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
