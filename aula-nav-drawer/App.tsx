import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
