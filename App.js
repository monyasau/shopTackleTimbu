import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductsScreen from './components/ProductsScreen'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ProductsScreen">
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// 5994a513c2084c5e9fc5294a8ee5908620240705095509566488
// 5994a513c2084c5e9fc5294a8ee5908620240705095509566488
// 67HGWYE946GG1CI
// org id: 4da78e0dd7ab42988da4e8014490cff7
// https://api.timbu.cloud/products?organization_id=4da78e0dd7ab42988da4e8014490cff7&Appid=67HGWYE946GG1CI&Apikey=5994a513c2084c5e9fc5294a8ee5908620240705095509566488&reverse_sort=false&page=1&size=10
