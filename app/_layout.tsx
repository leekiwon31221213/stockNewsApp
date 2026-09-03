import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { LogBox } from "react-native";

// 학습 화면의 중첩 목록 경고만 숨김
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

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
