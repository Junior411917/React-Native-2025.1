import { View, Text } from "react-native";

export default function Cliente({ nome }: { nome: string }) {
  return (
    <View>
      <Text>Bem vindo: {nome}</Text>
    </View>
  );
}
