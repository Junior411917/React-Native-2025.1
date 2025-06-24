import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { styles } from "./styles";
import { View, Text, Button } from "react-native";

type RouteSobreParams = {
  Sobre: {
    nome: string;
    email: string;
  };
};

type SobreRouteProps = RouteProp<RouteSobreParams, "Sobre">;

type StackParamList = {
  Home: undefined;
  Sobre: {
    nome: string;
    email: string;
  };
  Contato: undefined;
};

export default function Sobre() {
  const route = useRoute<SobreRouteProps>();
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Text>{route.params.nome}</Text>
      <Text>{route.params.email}</Text>
      <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
      <Text />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
