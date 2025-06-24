import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

export default function Main() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (!peso || !altura) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert("Erro", "Por favor, insira valores válidos");
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(2));
  };

  const limparCampos = () => {
    setPeso("");
    setAltura("");
    setImc(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Calcule o seu índice de massa corporal</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Peso (kg):</Text>
          <TextInput
            style={styles.input}
            value={peso}
            onChangeText={setPeso}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Altura (m):</Text>
          <TextInput
            style={styles.input}
            value={altura}
            onChangeText={setAltura}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
          {!imc ? (
            <TouchableOpacity style={styles.button} onPress={calcularIMC}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={limparCampos}>
              <Text style={styles.buttonText}>Novo Cálculo</Text>
            </TouchableOpacity>
          )}
        </View>

        {imc && (
          <View style={styles.resultContainer}>
            <Text style={styles.imcValue}>Seu IMC é: {imc}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1877f2",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1877f2",
  },
  buttonSecondaryText: {
    color: "#1877f2",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
  },
  imcValue: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});
