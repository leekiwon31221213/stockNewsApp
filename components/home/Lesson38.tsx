import { styles } from "@/app/(tabs)/index.styles";
import { reportError } from "@/utills/errorLogger";
import axios from "axios";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export function Lesson38() {
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleApiErrorTest() {
    //이전 에러 문구 초기화
    setErrorMsg("");

    try {
      await axios.get("API 주소");
      console.log("API 요청 성공");
    } catch (error) {
      console.log("API 요청 실패", error);
      // 개발자용 에러 기록
      reportError(error);
      // 사용자에게 보여줄 쉬운 문구
      setErrorMsg("API 요청 중 오류가 발생했습니다.");
    }
  }

  function handleAppErrorTest() {
    setErrorMsg("");

    try {
      // 일부러 앱 에러 발생
      throw new Error("38차시 테스트 앱 오류");
    } catch (error) {
      console.log("앱 오류 발생", error);
      // 개발자용 에러 기록
      reportError(error);

      // 사용자에게 보여줄 쉬운 문구
      setErrorMsg("앱 실행 중 오류가 발생했습니다.");
    }
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>38차시 - API·앱 오류를 실제 운영 환경에서 추적하기</Text>

      {errorMsg !== "" && <Text>{errorMsg}</Text>}

      <Pressable onPress={handleApiErrorTest} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>API 오류 테스트</Text>
      </Pressable>

      <Pressable onPress={handleAppErrorTest} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>앱 오류 테스트</Text>
      </Pressable>
    </View>
  );
}
