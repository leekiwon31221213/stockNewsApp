import { initSentry, Sentry } from "@/utills/errorLogger";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { LogBox } from "react-native";

// 앱이 시작될 때 Sentry를 연결
initSentry();

// 학습 화면의 중첩 목록 경고만 숨김
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)"></Stack.Screen>
        <Stack.Screen name="detail/detail1"></Stack.Screen>
        <Stack.Screen name="detail/[lessonId]" options={{ title: "학습 상세" }}></Stack.Screen>
      </Stack>
    </QueryClientProvider>
  );
}
export default Sentry.wrap(RootLayout);
