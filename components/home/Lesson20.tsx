import { Login } from "@/api/login";
import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
export function Lesson20() {
  const [emailInput, setEmail] = useState("");
  const [passWordInput, setPwInput] = useState("");

  async function handleLogin() {
    console.log("로그인버튼클릭");
    await Login({
      email: emailInput,
      password: passWordInput,
    });
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>20차시 - 로그인 화면 만들고 서버에 로그인 요청하기</Text>

      <TextInput value={emailInput} style={styles.input} onChangeText={setEmail} keyboardType="email-address" placeholder="아이디를 입력하세요"></TextInput>
      <TextInput value={passWordInput} style={styles.input} onChangeText={setPwInput} secureTextEntry placeholder="비밀번호를 입력하세요"></TextInput>

      <Pressable onPress={handleLogin} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>로그인</Text>
      </Pressable>
    </View>
  );
}
