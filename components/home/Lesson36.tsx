import { styles } from "@/app/(tabs)/index.styles";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export function Lesson36() {
  const [saveToken, setSaveToken] = useState<string>("");
  async function handleSaveToken() {
    const fakeToken = "fake-access-token-123";

    await SecureStore.setItemAsync("accessToken", fakeToken);
    console.log("토큰 저장 완료");
  }

  async function handleGetToken() {
    const token = await SecureStore.getItemAsync("accessToken");

    console.log("저장된 토큰", token);

    if (token) {
      setSaveToken(token);
      return;
    }
    setSaveToken("저장된 토큰 없음");
  }

  async function handleDeletToken() {
    await SecureStore.deleteItemAsync("accessToken");
    console.log("토큰 삭제 완료");
    setSaveToken("");
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>36차시 - 중요한 로그인 정보를 안전하게 휴대폰에 저장하기</Text>

      <Text>저장된 토큰: {saveToken}</Text>

      <Pressable onPress={handleSaveToken} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>토큰 저장</Text>
      </Pressable>

      <Pressable onPress={handleGetToken} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>토큰 불러오기</Text>
      </Pressable>

      <Pressable onPress={handleDeletToken} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>토큰 삭제하기</Text>
      </Pressable>
    </View>
  );
}
