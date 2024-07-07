import { StatusBar } from "expo-status-bar";
import ProductsScreen from "./components/ProductsScreen";
import TopBar from "./components/TopBar";
import { useState } from "react";


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