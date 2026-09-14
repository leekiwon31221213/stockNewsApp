import { styles } from "@/app/(tabs)/index.styles";
import { useEffect, useState } from "react";
import { AppState, Text, View, type AppStateStatus } from "react-native";

export function Lesson34() {
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    console.log("처음 앱 상태", AppState.currentState);

    const subscription = AppState.addEventListener("change", (nextAppState: AppStateStatus) => {
      console.log("변경된 앱 상태", nextAppState);

      setAppState(nextAppState);

      if (nextAppState === "active") {
        console.log("앱이 다시 화면으로 돌아왔습니다.");
      } else if (nextAppState === "background") {
        console.log("앱이 백그라운드로 이동했습니다.");
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>34차시 - 앱이 백그라운드로 갔다 돌아오는 상태 감지하기</Text>

      <Text>현재 앱 상태: {appState}</Text>
    </View>
  );
}
