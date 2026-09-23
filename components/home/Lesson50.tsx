import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeInDown, FadeOutLeft, LinearTransition } from "react-native-reanimated";

interface StockItem {
  id: number;
  ticker: string;
  name: string;
}

const initialStockList: StockItem[] = [
  {
    id: 1,
    ticker: "NVDA",
    name: "엔비디아",
  },
  {
    id: 3,
    ticker: "TSLA",
    name: "테슬라",
  },
];

export function Lesson50() {
  // 현재 화면에 표시되는 주식 목록
  const [stockList, setStockList] = useState<StockItem[]>(initialStockList);

  // AAPL 데이터를 목록 중간에 추가
  function handleAddApple() {
    const hasApple = stockList.some((item) => item.id === 2);

    // 이미 AAPL이 있으면 추가하지 않음
    if (hasApple) {
      return;
    }

    const apple: StockItem = {
      id: 2,
      ticker: "AAPL",
      name: "애플",
    };

    setStockList((prev) => {
      return [prev[0], apple, ...prev.slice(1)];
    });
  }

  // 선택한 카드 삭제
  function handleDelete(id: number) {
    setStockList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>50차시 - 목록 추가·삭제 애니메이션 만들기</Text>

      <Pressable
        onPress={handleAddApple}
        style={{
          padding: 12,
          backgroundColor: "#EAF1FF",
          marginBottom: 20,
        }}
      >
        <Text>새로운 뉴스 추가</Text>
      </Pressable>

      <View>
        {stockList.map((item) => {
          return (
            <Animated.View
              key={item.id}
              // 새로운 카드가 생길 때 실행
              entering={FadeInDown.duration(300)}
              // 카드가 삭제될 때 실행
              exiting={FadeOutLeft.duration(300)}
              // 카드들의 위치가 바뀔 때 실행
              layout={LinearTransition.duration(300)}
              style={{
                padding: 16,
                marginBottom: 10,
                backgroundColor: "#EAF1FF",
              }}
            >
              <Text>{item.ticker}</Text>
              <Text>{item.name}</Text>

              <Pressable
                onPress={() => handleDelete(item.id)}
                style={{
                  marginTop: 10,
                  paddingVertical: 8,
                }}
              >
                <Text>삭제</Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}
