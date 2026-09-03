import { Dimensions, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson4() {
  const { width: width1, height: height1 } = Dimensions.get("window");
  const { width: width2, height: height2 } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.lesson}>
      <Text style={styles.lessonTitle}>4차시 - 화면 크기와 SafeAreaView</Text>
      <Text>휴대폰의 안전한 영역 (상태바와 안겹치게)</Text>

      <Text>Dimensions 가로{width1}</Text>
      <Text>Dimensions 세로{height1}</Text>

      <Text>useWindowDimensions 가로{width2}</Text>
      <Text>useWindowDimensions 세로{height2}</Text>
    </SafeAreaView>
  );
}
