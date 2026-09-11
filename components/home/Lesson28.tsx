import { styles } from "@/app/(tabs)/index.styles";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

export function Lesson28() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
  useEffect(() => {
    const receivedSubscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log("알림 도착", notification.request.content.data);
    });

    const responseSubscription = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("알림 클릭", response.notification.request.content.data);
    });

    return () => {
      receivedSubscription.remove();
      responseSubscription.remove();
    };
  }, []);

  async function handleSendTestNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "테스트 알림",
        body: "28차시 알림 클릭 테스트입니다.",
        data: {
          screen: "newsDetail",
          id: 1,
        },
      },
      trigger: null,
    });
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>28차시 - 앱 상태별로 푸시 알림 받고 클릭 처리하기</Text>

      <Pressable onPress={handleSendTestNotification} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>테스트 알림 보내기</Text>
      </Pressable>
    </View>
  );
}
