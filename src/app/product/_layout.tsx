import { Stack } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ProductLayout() {
    return <Stack>
        <Stack.Screen
            name="[slug]"
            options={({ navigation}) => ({ headerShown: true, 
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>,
            })}
        />
    </Stack>
}
const styles = StyleSheet.create({})