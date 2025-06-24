import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [pessoas, setPessoas] = useState([
    { id: 1, nome: "Bruno", idade: 23, email: "b@gmail.com" },
    { id: 2, nome: "Maurício", idade: 32, email: "m@gmail.com" },
    { id: 3, nome: "Mariana", idade: 45, email: "ma@gmail.com" },
    { id: 4, nome: "Maria", idade: 45, email: "maria@gmail.com" },
    { id: 5, nome: "Joana", idade: 16, email: "j@gmail.com" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pessoas}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pessoa: {
    backgroundColor: "#121212",
    height: 200,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "#fff",
  },
});

function Pessoa(props) {
  return (
    <View style={styles.pessoa}>
      <Text style={styles.texto}>{props.data.id}</Text>
      <Text style={styles.texto}>{props.data.nome}</Text>
      <Text style={styles.texto}>{props.data.idade}</Text>
      <Text style={styles.texto}>{props.data.email}</Text>
    </View>
  );
}
