import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";
import { PropsStudy_8 } from "@/components/home/PropsStudy_08";

export function Lesson8() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>8차시 - 데이터 전달하고 화면 상태 바꾸기(상태 변경)</Text>
      <Text>
        Props: <PropsStudy_8 name="기원"></PropsStudy_8>
      </Text>
      <Pressable
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text>UseState: {count}</Text>
      </Pressable>
    </View>
  );
}
