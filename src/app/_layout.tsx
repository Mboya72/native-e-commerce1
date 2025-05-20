import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen
            name="(shop)"
            options={{ headerShown: false, title: " shop" }}
        />
        <Stack.Screen
            name="auth"
            options={{ headerShown: false, title: "Auth" }}
        />
        <Stack.Screen
            name="cartegories"
            options={{ headerShown: false, title: "Categories" }}
        />
        <Stack.Screen
            name="product/[id]"
            options={{ headerShown: false, title: "Product" }}
        />
        <Stack.Screen
            name="cart"
            options={{ presentation: 'modal' , title: " Shopping Cart" }}
        />
    </Stack>
  
  );
}