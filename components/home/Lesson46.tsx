import { styles } from "@/app/(tabs)/index.styles";
import { Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export function Lesson46() {
  // 현재 세로 스크롤 위치 저장
  const scrollY = useSharedValue(0);

  //스크롤할 때마다 위치 업데이트
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolation.CLAMP),
    };
  });

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>46차시 - 스크롤 위치에 따라 UI 움직이기</Text>

      <Animated.View style={animatedHeaderStyle}>
        <Text>StockNews</Text>
        <Text>아래로 스크롤하면 이 문구가 서서히 사라짐 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti soluta, rem voluptatum nulla</Text>
      </Animated.View>

      <Animated.ScrollView style={{ height: 350, flexGrow: 0 }} onScroll={scrollHandler} scrollEventThrottle={16}>
        <View style={{ minHeight: 250 }}>
          <Text>NVDA</Text>
          <Text>엔비디아 뉴스</Text>
        </View>

        <View style={{ minHeight: 250 }}>
          <Text>AAPL</Text>
          <Text>애플 뉴스</Text>
        </View>

        <View style={{ minHeight: 250 }}>
          <Text>TSLA</Text>
          <Text>테슬라 뉴스</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
