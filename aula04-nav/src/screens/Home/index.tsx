import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { View, Text, Button } from "react-native";

type StackParamList = {
  Home: undefined;
  Sobre: {
    nome: string;
    email: string;
  };
  Contato: undefined;
};

export default function Home() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre",{nome:"Roni",email:"roni_inf@hotmail.com"})}
      />
    </View>
  );
}
