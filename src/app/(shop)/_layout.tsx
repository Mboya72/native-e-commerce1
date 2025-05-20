import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";

export default function  TabsLayout() {
  return (
  <SafeAreaView>
      <Tabs >
      <Tabs.Screen name="index" options={ {headerShown:false,} } />
      <Tabs.Screen name="orders" />
    </Tabs>
  </SafeAreaView>
  );
}
