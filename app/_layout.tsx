import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)"></Stack.Screen>
      <Stack.Screen name="detail/detail1.tsx"></Stack.Screen>
    </Stack>
  );
}
