import { View, Text, StyleSheet } from "react-native";

interface Usuario {
  nome: string;
  email: string;
  cargo: string;
}

interface Props {
  dados: Usuario;
}

export default function UsuariosList({ dados }: Props) {
  console.log(dados);

  return (
    <View style={styles.container}>
      <Text>Nome:{dados.nome}</Text>
      <Text>Email:{dados.email}</Text>
      <Text>Cargo:{dados.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 8,
    marginBottom: 14,
  },
});
