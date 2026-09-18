import { styles } from "@/app/(tabs)/index.styles";
import React, { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface StockItem {
  id: number;
  ticker: string;
  koreanName: string;
  searchCount: number;
}

const STOCK_LIST: StockItem[] = [
  {
    id: 1,
    ticker: "AAPL",
    koreanName: "애플",
    searchCount: 120,
  },
  {
    id: 2,
    ticker: "TSLA",
    koreanName: "테슬라",
    searchCount: 98,
  },
  {
    id: 3,
    ticker: "NVDA",
    koreanName: "엔비디아",
    searchCount: 150,
  },
  {
    id: 4,
    ticker: "MSFT",
    koreanName: "마이크로소프트",
    searchCount: 87,
  },
  {
    id: 5,
    ticker: "GOOGL",
    koreanName: "알파벳",
    searchCount: 75,
  },
  {
    id: 6,
    ticker: "NAVER",
    koreanName: "네이버",
    searchCount: 84,
  },
];

function StockCard({ item }: { item: StockItem }) {
  return (
    <View>
      <Text>종목명: {item.koreanName}</Text>
      <Text>티커: {item.ticker}</Text>
      <Text>검색 수: {item.searchCount}</Text>
    </View>
  );
}

const MemoStockCard = React.memo(StockCard);
export function Lesson37() {
  const [count, setCount] = useState<number>(0);
  const renderItem = useCallback(({ item }: { item: StockItem }) => {
    return <MemoStockCard item={item}></MemoStockCard>;
  }, []);

  const keyExtractor = useCallback((item: StockItem) => {
    return String(item.id);
  }, []);

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>37차시 - FlatList와 컴포넌트 렌더링 최적화하기</Text>

      <Text>부모 count: {count}</Text>

      <Pressable onPress={handleIncrease} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>부모 state 변경</Text>
      </Pressable>

      <FlatList data={STOCK_LIST} keyExtractor={keyExtractor} renderItem={renderItem} initialNumToRender={5} windowSize={5} removeClippedSubviews scrollEnabled={false}></FlatList>
    </View>
  );
}
