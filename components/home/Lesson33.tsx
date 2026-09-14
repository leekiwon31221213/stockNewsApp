import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from "react-native";

export function Lesson33() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handlerBtn() {
    console.log("이름", name);
    console.log("이메일", email);
    console.log("문의 내용", message);
  }
  return (
    <KeyboardAvoidingView style={styles.lesson} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View>
        <Text style={styles.lessonTitle}>33차시 - 키보드가 입력창을 가리지 않게 화면 처리하기</Text>

        <View>
          <Text>이름</Text>
          <TextInput value={name} onChangeText={setName} placeholder="이름을 입력하세요" style={styles.input}></TextInput>
        </View>

        <View>
          <Text>이메일</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="이메일을 입력하세요" keyboardType="email-address" style={styles.input}></TextInput>
        </View>

        <View>
          <Text>문의 내용</Text>
          <TextInput value={message} onChangeText={setMessage} placeholder="문의 내용을 입력하세요" multiline></TextInput>

          <Pressable onPress={handlerBtn} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
            <Text style={styles.btnText}>제출하기</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
