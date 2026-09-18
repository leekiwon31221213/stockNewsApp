import { styles } from "@/app/(tabs)/index.styles";
import { Platform, Text, View } from "react-native";

export function Lesson39() {
  const osText = Platform.select({
    ios: "현재 기기는 iOS입니다.",
    android: "현재 기기는 Android입니다.",
    default: "현재 기기를 확인할 수 없습니다.",
  });

  const guideText = Platform.OS === "android" ? "Android는 뒤로가기 버튼과 elevation 스타일을 자주 고려합니다." : "iOS는 SafeArea와 shadow 스타일을 자주 고려합니다.";
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>39차시 - Android·iOS 기기별 차이와 설정 처리하기</Text>

      <Text>현재 OS: {Platform.OS}</Text>
      <Text>{osText}</Text>
      <Text>{guideText}</Text>
    </View>
  );
}
