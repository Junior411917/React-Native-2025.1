import { View, Text, StyleSheet, FlatList } from "react-native";

export default function App() {
  const alunos = [
    { matricula: 123, nome: "Ana" },
    { matricula: 124, nome: "Antônio" },
    { matricula: 113, nome: "Bruna" },
    { matricula: 103, nome: "Flávio" },
    { matricula: 143, nome: "Marcos" },
    { matricula: 114, nome: "Marcos" },
    { matricula: 111, nome: "Marcos" },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.nome}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={alunos}
        renderItem={renderItem}
        keyExtractor={(item) => item.matricula}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    backgroundColor: "#d9d9d9",
    padding: 20,
    marginVertical: 40,
    marginHorizontal: 20,
    alignItems: "center",
  },
});
