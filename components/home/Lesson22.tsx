import { api } from "@/api/instance";
import { styles } from "@/app/(tabs)/index.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, Text, View } from "react-native";

export function Lesson22() {
  async function handleApiRequest() {
    await AsyncStorage.setItem("accessToken", "fake-access-token-1234");

    try {
      await api.get("API 주소");
    } catch (error) {
      console.log("가짜 API 요청");
    }
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>22차시 - API 요청할 때 로그인 토큰 자동으로 보내기</Text>

      <Pressable onPress={handleApiRequest} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>API 요청하기</Text>
      </Pressable>
    </View>
  );
}
