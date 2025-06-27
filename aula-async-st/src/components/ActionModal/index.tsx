import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ActionModalProps {
  handleClose: () => void;
  handleInformacoes: () => void;
  handleContato: () => void;
}

export default function ActionModal({
  handleClose,
  handleInformacoes,
  handleContato,
}: ActionModalProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
      ></TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleInformacoes}
        >
          <Text style={styles.actionText}>Informações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleContato}>
          <Text style={styles.actionText}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
