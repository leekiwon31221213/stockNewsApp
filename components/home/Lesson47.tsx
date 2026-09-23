import { styles } from "@/app/(tabs)/index.styles";
import { Image, Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export function Lesson47() {
  // 현재 스크롤 위치 지정
  const scrollY = useSharedValue(0);
  // 스크롤할 때마다 위치 저장
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });

  // 이미지 크기변경
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollY.value, [0, 160], [1, 0.6], Extrapolation.CLAMP),
        },
      ],
    };
  });

  // 제목 크기와 위치변경
  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollY.value, [0, 160], [1, 0.85], Extrapolation.CLAMP),
        },
        {
          translateY: interpolate(scrollY.value, [0, 160], [0, -20], Extrapolation.CLAMP),
        },
      ],
    };
  });

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>47차시 - 스크롤에 따라 이미지·텍스트 크기와 위치 변경하기</Text>

      <View style={{ height: 180 }}>
        <Animated.View style={animatedImageStyle}>
          <Image source={require("@/assets/images/img1.png")} style={{ width: 100, height: 100 }} resizeMode="contain"></Image>
        </Animated.View>

        <Animated.View style={animatedTitleStyle}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>StockNews</Text>
        </Animated.View>

        <Text>아래 뉴스 목록을 스크롤</Text>

        <Animated.ScrollView onScroll={scrollHandler} style={{ minHeight: 350, flexGrow: 0 }} scrollEventThrottle={16}>
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
    </View>
  );
}
