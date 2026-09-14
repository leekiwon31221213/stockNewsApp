import { styles } from "@/app/(tabs)/index.styles";
import { Pressable, Text, View } from "react-native";

export function Lesson36() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>36차시 - 중요한 로그인 정보를 안전하게 휴대폰에 저장하기</Text>

      <Text>인터넷 연결 상태:{""}</Text>

      <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>현재 네트워크 확인</Text>
      </Pressable>
    </View>
  );
}
