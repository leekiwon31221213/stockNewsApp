import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)"></Stack.Screen>
        <Stack.Screen name="detail/detail1"></Stack.Screen>
      </Stack>
    </QueryClientProvider>
  );
}
