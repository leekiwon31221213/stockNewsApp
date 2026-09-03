import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

// 13차시
const news = [
  { id: "1", title: "삼성전자 주가 상승" },
  { id: "2", title: "애플 신제품 발표" },
  { id: "3", title: "엔비디아 실적 발표" },
];

export function Lesson13() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>13차시 - 목록을 눌러 상세화면으로 데이터 전달하기</Text>

      {news.map((item) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => {
              router.push({
                pathname: "/detail/detail1",
                params: {
                  id: item.id,
                  title: item.title,
                },
              });
            }}
          >
            <Text>{item.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
