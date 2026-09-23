import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

interface StockItem {
  id: number;
  ticker: string;
  name: string;
}

interface SwiperCardProps {
  item: StockItem;
  onDelete: (id: number) => void;
}

const initialStockList: StockItem[] = [
  {
    id: 1,
    ticker: "NVDA",
    name: "엔비디아",
  },
  {
    id: 2,
    ticker: "AAPL",
    name: "애플",
  },
  {
    id: 3,
    ticker: "TSLA",
    name: "테슬라",
  },
];

export function SwipeCard({ item, onDelete }: SwiperCardProps) {
  // 카드의 현재 좌우 이동 거리
  const translateX = useSharedValue(0);

  // 손가락 드래그 감지
  const panGesture = Gesture.Pan()
    // 제스처 안에서 React 함수 실행 가능하게 설정
    .runOnJS(true)

    // 손가락을 움직이는 동안 실행
    .onUpdate((event) => {
      // 오른쪽 이동은 막고 왼쪽으로만 이동
      translateX.value = Math.min(event.translationX, 0);
    })

    // 손가락을 뗐을 때 실행
    .onEnd(() => {
      // 왼쪽으로 100 이상 밀었으면 삭제
      if (translateX.value < -100) {
        onDelete(item.id);
        return;
      }

      // 삭제 기준에 못 미치면 원래 위치로 복귀
      translateX.value = withSpring(0);
    });

  // translateX 값을 실제 카드 위치에 적용
  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.gestureCard, animatedCardStyle]}>
        <Text>{item.ticker}</Text>
        <Text>{item.name}</Text>
        <Text>왼쪽으로 밀어서 삭제</Text>
      </Animated.View>
    </GestureDetector>
  );
}

export function Lesson49() {
  const [stockList, setStockList] = useState<StockItem[]>(initialStockList);
  function handleDelete(id: number) {
    setStockList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>49차시 - 카드를 밀어서 삭제하고 드래그하는 인터랙션 만들기</Text>

      <Text>카드를 왼쪽으로 충분히 밀면 삭제</Text>

      <FlatList
        data={stockList}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return <SwipeCard item={item} onDelete={handleDelete}></SwipeCard>;
        }}
      ></FlatList>
    </View>
  );
}
