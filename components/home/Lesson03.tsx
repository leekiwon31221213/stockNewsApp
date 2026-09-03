import { Keyboard, Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson3() {
  const handlePress = () => {
    alert("알림");
    Keyboard.dismiss(); /* 키보드 닫기  */
  };

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>3차시 - Pressable과 Keyboard</Text>

      <Pressable onPress={handlePress}>
        <Text style={styles.title}>버튼</Text>
      </Pressable>
    </View>
  );
}
