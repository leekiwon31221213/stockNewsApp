import { styles } from "@/app/(tabs)/index.styles";
import { ENV } from "@/contents/env";
import { Pressable, Text, View } from "react-native";
export function Lesson30() {
  function handleCheckEnv() {
    console.log("현재 API 주소", ENV);
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>30차시 - 개발용·배포용 환경과 서버 주소 나누기</Text>

      <Pressable onPress={handleCheckEnv} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>API 주소 확인</Text>
      </Pressable>
    </View>
  );
}
