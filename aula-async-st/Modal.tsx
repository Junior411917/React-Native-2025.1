import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import ActionModal from "./src/components/ActionModal";

export default function App() {
  const [exibirModal, setExibirModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.title}>Tela Principal</Text>
      <TouchableOpacity
        style={styles.bottom}
        onPress={() => setExibirModal(true)}
      >
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={exibirModal}
        onRequestClose={() => setExibirModal(false)}
      >
        <ActionModal
          handleClose={() => setExibirModal(false)}
          handleInformacoes={() => Alert.alert("Informações")}
          handleContato={() => Alert.alert("Contato")}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121318",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  bottom: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
