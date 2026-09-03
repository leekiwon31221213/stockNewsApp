import { Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson1() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>1차시 - Text와 View</Text>

      <View style={styles.container__inner}>
        <Text>안녕하세요</Text>
        <Text>방갑습니다</Text>
        <Text>
          프론트엔드 개발자
          <Text>React Native 공부 중</Text>
        </Text>
      </View>
    </View>
  );
}
