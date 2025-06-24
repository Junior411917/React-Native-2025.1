import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Logo from "./assets/favicon.png";
export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    console.log("logado!");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text>Login</Text>
      <TextInput style={styles.input} onChangeText={(e) => setEmail(e)} />

      <Text>Senha</Text>
      <TextInput style={styles.input} onChangeText={(e) => setSenha(e)} />

      <TouchableOpacity style={styles.button} onPress={logar}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    gap: 20, // Espaçamento entre os itens
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10, // Espaçamento interno
  },
  button: {
    padding: 12, // Espaçamento interno do botão
    width: 300,
    backgroundColor: "#4accf0",
    alignItems: "center",
    borderRadius: 20, // Bordas arredondadas do botão
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
