import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen
            name="(shop)"
            options={{ headerShown: false, title: " shop" }}
        />
        <Stack.Screen
            name="auth"
            options={{ headerShown: true, title: "Auth" }}
        />
        <Stack.Screen
            name="cartegories"
            options={{ headerShown: true, title: "Categories" }}
        />
        <Stack.Screen
            name="product/[id]"
            options={{ headerShown: true, title: "Product" }}
        />
        <Stack.Screen
            name="cart"
            options={{ presentation: 'modal' , title: " Shopping Cart" }}
        />
    </Stack>
  
  );
}
const styles = StyleSheet.create({})