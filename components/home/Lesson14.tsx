import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";
import { singUp } from "@/api/news";

export function Lesson14() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");

  async function SendSignUpBtn() {
    await singUp({
      email: email,
      password: password,
      recoveryEmail: recoveryEmail,
    });
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>14차시 - Axios로 API 호출하기</Text>

      <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} placeholder="이메일을 입력해주세요"></TextInput>

      <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="비밀번호를 입력해주세요" secureTextEntry></TextInput>

      <TextInput value={recoveryEmail} onChangeText={setRecoveryEmail} keyboardType="email-address" style={styles.input} placeholder="복구 이메일을 입력해주세요"></TextInput>

      <Pressable accessibilityRole="button" style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]} onPress={SendSignUpBtn}>
        <Text style={styles.btnText}>회원가입</Text>
      </Pressable>
    </View>
  );
}
