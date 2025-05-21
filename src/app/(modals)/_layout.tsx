import { Stack } from 'expo-router';

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        presentation: 'transparentModal',
        animation: 'slide_from_bottom', // Optional: makes it feel more natural
        headerShown: false,
      }}
    />
  );
}
