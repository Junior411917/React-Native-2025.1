import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type DrawerProps = DrawerNavigationProp<any>;

export default function Home() {
  const navigation = useNavigation<DrawerProps>();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Abrir Drawer" onPress={() => navigation.openDrawer()} />
      <Text />
      <Button title="Sobre" onPress={() => navigation.jumpTo("Sobre")} />
    </View>
  );
}
