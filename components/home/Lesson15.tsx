import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";
import { popularList as getPopularList, type PopularList } from "@/api/news";

export function Lesson15() {
  const [popularList, setPopularList] = useState<PopularList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleGetPopularList() {
    try {
      setIsLoading(true);
      setError("");
      const data = await getPopularList();
      console.log("인기 목록 데이터", data);
      setPopularList(data);
    } catch (e) {
      setError("데이터를 불러오지 못했습니다.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>15차시 - API 데이터 조회하고 상태 처리하기</Text>

      <Pressable onPress={handleGetPopularList} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>뉴스 불러오기</Text>
      </Pressable>

      {isLoading && <Text>불러오는 중...</Text>}

      {error !== "" && <Text>{error}</Text>}

      {!isLoading && error === "" && popularList.length === 0 && <Text>데이터가 없습니다.</Text>}

      {popularList.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}
