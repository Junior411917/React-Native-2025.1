import { useRef, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput as TextInputType,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./src/styles/style";
import api from "./src/services/api";

interface CnpjData {
  cnpj: string;
  fantasia: string;
  logradouro: string;
  municipio: string;
}

export default function App() {
  const [cnpj, setCnpj] = useState("");
  const inputRef = useRef<TextInputType>(null);
  const [cnpjUser, setCnpjUser] = useState<CnpjData | null>(null);

  //Para limpar os números
  function limpar(): void {
    setCnpj("");
    //Função para limpar toda a informação da api ao clicar no "limpar"
    setCnpjUser(null);
    //Função para limpar toda a informação da api ao clicar no "limpar"
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }

  //Função para dizer que o cnpj precisa ter 14 dígitos + busca de cnpj na api
  const buscar = async () => {
    if (cnpj.length !== 14) {
      Alert.alert("O cnpj deve ter 14 dígitos");
      return;
    }
    try {
      const response = await api.get(`/${cnpj}`);
      if (response.data.erro) {
        setCnpjUser(null);
        Alert.alert("Cnpj não encontrado");
      }
      setCnpjUser(response.data);
    } catch (error) {
      console.error("Error:" + error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"gray"} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite seu CNPJ:</Text>
        <TextInputType
          style={styles.input}
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
          keyboardType="numeric"
          ref={inputRef}
          onFocus={limpar} //o "onFocus" é uma função para zerar tudo ao clicar no textInput
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={buscar}
          style={[styles.botao, { backgroundColor: "#1d75cd" }]}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#cd3e1d" }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cnpjUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cnpj:{cnpjUser?.cnpj}</Text>
          <Text style={styles.itemText}>
            Nome Fantasia:{cnpjUser?.fantasia}
          </Text>
          <Text style={styles.itemText}>Logradouro:{cnpjUser?.logradouro}</Text>
          <Text style={styles.itemText}>Municipio:{cnpjUser?.municipio}</Text>
        </View>
      )}
    </View>
  );
}
