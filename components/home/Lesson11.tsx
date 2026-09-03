import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson11() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>11차시 - 화면 이동 기능 만들기(Stack Navigation)</Text>

      <Pressable
        onPress={() => {
          router.push("/detail/detail1");
        }}
      >
        <Text>디테일 페이지1</Text>
      </Pressable>
    </View>
  );
}
