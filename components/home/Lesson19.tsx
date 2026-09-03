import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";

type NewsItem = {
  id: number;
  title: string;
};

export function Lesson19() {
  const [newsList, setNewsList] = useState<NewsItem[]>([
    { id: 1, title: "뉴스 1" },
    { id: 2, title: "뉴스 2" },
    { id: 3, title: "뉴스 3" },
    { id: 4, title: "뉴스 4" },
    { id: 5, title: "뉴스 5" },
  ]);

  const [isReFreshing, setIsReFreshing] = useState<boolean>(false);

  function handleReFreshing() {
    setIsReFreshing(true);

    setTimeout(() => {
      console.log("새로고침 완료");

      setIsReFreshing(false);
    }, 1000);
  }

  function handleLoadMore() {
    const nextId = newsList.length + 1;

    if (nextId > 20) {
      return;
    }
    setNewsList([
      ...newsList,
      {
        id: nextId,
        title: `뉴스 ${nextId}`,
      },
    ]);
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>19차시 - 목록 더 불러오기와 당겨서 새로고침하기</Text>

      <FlatList<NewsItem>
        data={newsList}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
        refreshing={isReFreshing}
        onRefresh={handleReFreshing}
        onEndReached={handleLoadMore}
      ></FlatList>
    </View>
  );
}
