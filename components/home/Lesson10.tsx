import { useState } from "react";
import { Keyboard, Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";
import { Button_10 } from "@/components/home/Button_10";
import { Input_10 } from "@/components/home/Input_10";
import { Modal_10 } from "@/components/home/Modal_10";

export function Lesson10() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const handlePress = () => {
    alert("버튼클릭");
    Keyboard.dismiss(); /* 키보드 닫기  */
  };

  function handleModalOn() {
    setIsModalOpen(true);
  }

  function handleModalOff() {
    setIsModalOpen(false);
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>10차시 - 자주 쓰는 버튼·입력창·팝업 재사용하기</Text>
      <Button_10 title="버튼 클릭" onPress={handlePress}></Button_10>
      <Input_10 value={name} placeholder="이름을 입력하세요" onChangeText={setName} style={styles.input}></Input_10>

      <Pressable onPress={handleModalOn}>
        <Text>모달열기</Text>
      </Pressable>

      <Modal_10 visible={isModalOpen} onClose={handleModalOff}></Modal_10>
    </View>
  );
}
