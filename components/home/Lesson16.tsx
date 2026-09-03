import { useQuery } from "@tanstack/react-query";
import { Pressable, Text, View } from "react-native";

import { popularList as getPopularList } from "@/api/news";
import { styles } from "@/app/(tabs)/index.styles";

export function Lesson16() {
  // 16차시
  const {
    data: popularList = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["popularList"],
    queryFn: getPopularList,
    enabled: false,
  });

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>16차시 -TanStack(React) Query로 조회 데이터 관리하기</Text>

      <Pressable
        onPress={() => {
          refetch();
        }}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>뉴스 불러오기</Text>
      </Pressable>

      {isLoading && <Text>불러오는 중...</Text>}

      {isError && <Text>데이터를 불러오지 못했습니다.</Text>}

      {!isLoading && !isError && popularList.length === 0 && <Text>데이터가 없습니다.</Text>}

      {popularList.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}
