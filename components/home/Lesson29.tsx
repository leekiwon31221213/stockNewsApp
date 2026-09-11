import { styles } from "@/app/(tabs)/index.styles";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export function Lesson29() {
  const router = useRouter();

  useEffect(() => {
    const responseSubscription = Notifications.addNotificationResponseReceivedListener((response) => {
      const data = response.notification.request.content.data as {
        screen?: string;
        id?: number;
      };

      console.log("알림 클릭 데이터", data);

      if (data.screen === "newsDetail") {
        router.push({
          pathname: "/detail/detail1",
          params: {
            id: String(data.id),
          },
        });
      }
    });

    return () => {
      responseSubscription.remove();
    };
  }, [router]);

  async function handleSendTestNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "테스트 알림",
        body: "29차시 알림 클릭 후 화면 이동 테스트입니다.",
        data: {
          screen: "newsDetail",
          id: 1,
        },
      },
      trigger: null,
    });

    router.push({
      pathname: "/detail/detail1",
      params: {
        id: "1",
      },
    });
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>29차시 - 푸시 알림이나 링크를 눌러 원하는 화면으로 이동하기</Text>

      <Pressable onPress={handleSendTestNotification} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>푸시 알림 이동</Text>
      </Pressable>
    </View>
  );
}
