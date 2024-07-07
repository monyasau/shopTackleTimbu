import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductsScreen from "./components/ProductsScreen";
import BottomNavigation from "./components/TopBar";
import TopBar from "./components/TopBar";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [reloadStore, setReloadStore] = useState(false);
  const reloadStoreFunction = () => {
    setReloadStore(!reloadStore);
  };
  return (
    <>
      <TopBar reloadStore={reloadStoreFunction} />
      <ProductsScreen reloadStore={reloadStore} />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
