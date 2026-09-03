import { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson5() {
  const [name, setName] = useState("");

  const handleChangeName = (text: string) => {
    setName(text);
  };

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>5차시 - TextInput</Text>

      <TextInput value={name} onChangeText={setName} placeholder="onChangeText" style={styles.input}></TextInput>

      <TextInput value={name} onChangeText={handleChangeName} placeholder="직접 함수를 만들어서 받기" style={styles.input}></TextInput>

      <TextInput style={styles.input} placeholder="secureTextEntry  비밀번호 입력창" secureTextEntry></TextInput>

      <TextInput style={styles.input} placeholder="키보드 종류 바꾸기 이메일" keyboardType="email-address"></TextInput>
      <TextInput style={styles.input} placeholder="키보드 종류 바꾸기 숫자만" keyboardType="numeric"></TextInput>

      <TextInput style={styles.input} placeholder="대소문자 autoCapitalize" autoCapitalize="none"></TextInput>

      <TextInput style={styles.input} placeholder="여러줄입력 multiline" multiline></TextInput>

      <TextInput style={styles.input} placeholder="최대 입력 maxLength" maxLength={10}></TextInput>

      <TextInput style={styles.input} placeholder="키보드 오른쪽 아래 버튼에 어떤 의미를 보여줄지 설정 returnKeyType done,next,search,send" returnKeyType="done"></TextInput>
    </View>
  );
}
