import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export function Lesson41() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleSubmit() {
    Keyboard.dismiss();

    console.log("이름", name);
    console.log("이메일", email);
    console.log("문의 내용", message);
  }

  return (
    <KeyboardAvoidingView style={styles.lesson} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.formContent}>
        <Text style={styles.lessonTitle}>41차시 - 입력폼·키보드·스크롤이 같이 있는 실제 화면 처리하기</Text>

        <View>
          <Text>이름</Text>
          <TextInput value={name} onChangeText={setName} placeholder="이름 입력" style={styles.input} returnKeyType="next"></TextInput>
        </View>

        <View>
          <Text>이메일</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="이메일 입력" keyboardType="email-address" autoCapitalize="none" style={styles.input} returnKeyType="next"></TextInput>
        </View>

        <View>
          <Text>문의 내용</Text>
          <TextInput value={message} onChangeText={setMessage} placeholder="문의 내용 입력" multiline textAlignVertical="top" style={[styles.input, styles.textarea]}></TextInput>
        </View>

        <Pressable onPress={handleSubmit} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
          <Text style={styles.btnText}>제출</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
