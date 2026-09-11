import { styles } from "@/app/(tabs)/index.styles";
import * as Notifications from "expo-notifications";
import { Pressable, Text, View } from "react-native";

export function Lesson27() {
  async function hanleNotificationPermission() {
    const permission = await Notifications.getPermissionsAsync();
    if (permission.status === "granted") {
      console.log("이미 알림 권한이 있습니다.");
      return;
    }

    const result = await Notifications.requestPermissionsAsync();
    console.log("알림 권한 결과", result.status);
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>27차시 - Firebase 연결하고 푸시 알림 받을 준비하기</Text>

      <Pressable onPress={hanleNotificationPermission} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}> 알림 권한 확인</Text>
      </Pressable>
    </View>
  );
}
