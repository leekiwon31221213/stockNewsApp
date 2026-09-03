import { Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";
import { TypeStudy9 } from "@/components/home/TypeStudy09";

export function Lesson9() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>9차시 - TypeScript로 데이터 타입 정하기</Text>
      <TypeStudy9 name="기원" age={30} isLogin={true}></TypeStudy9>
    </View>
  );
}
