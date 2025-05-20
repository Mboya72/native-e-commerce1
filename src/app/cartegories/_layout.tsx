import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function CartegoriesLayout() {
    return <Stack>
        <Stack.Screen
            name="[slug]"
            options={{ headerShown: true, }}
        />
    </Stack>
}
const styles = StyleSheet.create({})