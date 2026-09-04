import { styles } from "@/app/(tabs)/index.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export function Lesson23() {
  const [isLogin, setIsLogin] = useState(false);
  async function checkLogin() {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
    }
  }

  async function handleLogOut() {
    await AsyncStorage.removeItem("accessToken");
    setIsLogin(false);
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>23차시 - 앱을 다시 켜도 로그인 유지하고 로그아웃하기</Text>

      <Text>{isLogin ? "로그인 상태" : "로그아웃 상태"}</Text>

      <Pressable onPress={handleLogOut} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>로그아웃</Text>
      </Pressable>
    </View>
  );
}
