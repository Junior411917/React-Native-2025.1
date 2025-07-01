import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Contato from "./src/screens/Contato";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Contato />
    //   <Home />
    //   <Sobre />
    // </View>

    //A partir daqui, será trabalhada a questão da navegação por tabs
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true, //para deixar o cabeçalho visível em caso de true
          tabBarActiveTintColor: "gold", //para mexer na cor quando o botão for selecionado
          tabBarInactiveTintColor: "green", //para as outras inativas
          tabBarInactiveBackgroundColor: "#1212123a3d41",
          tabBarActiveBackgroundColor: "red",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="página inicicial" component={Home} />
        <Tab.Screen
          name="página secundária"
          component={Contato}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="airplay" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen name="página ternária" component={Sobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "grey",
    margin: 10,
  },
});
