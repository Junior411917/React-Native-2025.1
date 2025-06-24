import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.scroll}>
        <Text style={styles.texto}>Exemplo de Scroll</Text>
        <Text style={styles.texto}>Exemplo de Scroll</Text>
        <Text style={styles.texto}>Exemplo de Scroll</Text>
        <Text style={styles.texto}>Exemplo de Scroll</Text>
        <Text style={styles.texto}>Exemplo de Scroll</Text>
        <Text style={styles.texto}>Exemplo de Scroll</Text>
        
      </ScrollView>
      <Text>Aula de Native</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "orange",
    fontSize: 28,
    padding: 20,
  },
  scroll: {
    backgroundColor: "gray",
    height: 120,
  },
});
