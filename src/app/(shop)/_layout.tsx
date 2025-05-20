import { Tabs } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <SafeAreaView>
         <Tabs >
      <Tabs.Screen name="index" Options={{ headerShown: false }} />
      <Tabs.Screen name="orders" />
    </Tabs>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({})