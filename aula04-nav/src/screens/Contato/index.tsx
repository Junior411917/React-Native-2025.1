import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { styles } from "./styles";
import { View, Text, Button } from "react-native";

type StackParamList = {
  Home: undefined;
};

export default function Contato() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Contato</Text>
      <Button
        title="Tela de Início"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
}
