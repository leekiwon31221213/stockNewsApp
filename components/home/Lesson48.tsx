import { styles } from "@/app/(tabs)/index.styles";
import { Image, Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
export function Lesson48() {
  // 현재 스크롤 위치 저장
  const scrollY = useSharedValue(0);

  // 스크롤할 때마다 위치 업데이트
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  // 상단 헤더 높이 축소
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 200], [150, 70], Extrapolation.CLAMP),
    };
  });

  // 대표 이미지 Parallax
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollY.value, [0, 200], [0, 70], Extrapolation.CLAMP),
        },
      ],
    };
  });

  return (
    <View style={[styles.lesson, { flex: 1 }]}>
      <Text style={styles.lessonTitle}>48차시 - Parallax·Sticky Header·Collapsing Header 만들기</Text>

      <Animated.View
        style={[
          {
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#EAF1FF",
          },
          animatedHeaderStyle,
        ]}
      >
        <Text style={{ fontSize: 24, fontWeight: "700" }}>StockNews</Text>
        <Text>스크롤하면 작아지는 헤더</Text>
      </Animated.View>

      <Animated.ScrollView style={{ flex: 1 }} onScroll={scrollHandler} scrollEventThrottle={16} stickyHeaderIndices={[1]}>
        <View
          style={{
            height: 200,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.View style={animatedImageStyle}>
            <Image source={require("@/assets/images/logo.png")} style={{ width: 180, height: 180 }} resizeMode="contain"></Image>
          </Animated.View>
        </View>

        <View
          style={{
            padding: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>전체 뉴스　인기 뉴스　관심 종목</Text>
        </View>

        <View>
          <View style={{ minHeight: 250, padding: 16 }}>
            <Text>NVDA</Text>
            <Text>엔비디아 뉴스</Text>
          </View>

          <View style={{ minHeight: 250, padding: 16 }}>
            <Text>AAPL</Text>
            <Text>애플 뉴스</Text>
          </View>

          <View style={{ minHeight: 250, padding: 16 }}>
            <Text>TSLA</Text>
            <Text>테슬라 뉴스</Text>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
