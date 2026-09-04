import { styles } from "@/app/(tabs)/index.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, Text, View } from "react-native";
export function Lesson21() {
  const token = "fake-access-token-1234";

  async function handleSaveToken() {
    await AsyncStorage.setItem("accessToken", token);
    console.log("토큰 저장 완료");
  }

  async function handleGetToken() {
    const savedToken = await AsyncStorage.getItem("accessToken");
    console.log("토큰 가져오기 완료", savedToken);
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>21차시 - 로그인 토큰을 휴대폰에 저장하기</Text>

      <Pressable onPress={handleSaveToken} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>토큰 저장하기</Text>
      </Pressable>
      <Pressable onPress={handleGetToken} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>토큰 가져오기</Text>
      </Pressable>
    </View>
  );
}
