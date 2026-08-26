import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="notification"
        options={{
          title: "알림",
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="mypage"
        options={{
          title: "마이페이지",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
