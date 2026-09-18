import { styles } from "@/app/(tabs)/index.styles";
import { Pressable, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export function Lesson44() {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }, { translateY: translateY.value }, { translateX: translateX.value }],
    };
  });

  function handleFade() {
    opacity.value = opacity.value === 1 ? withTiming(0.3, { duration: 300 }) : withTiming(1, { duration: 300 });
  }

  function handleScale() {
    scale.value = scale.value === 1 ? withTiming(1.15, { duration: 300 }) : withTiming(1, { duration: 300 });
  }

  function handleSlide() {
    translateY.value = translateY.value === 0 ? withTiming(40, { duration: 300 }) : withTiming(0);
  }

  function handleSpring() {
    translateX.value = translateX.value === 0 ? withTiming(80, { duration: 300 }) : withTiming(0);
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>44차시 - Fade·Scale·Slide·Spring 애니메이션 만들기</Text>

      <Animated.View style={[styles.gestureCard, animatedCardStyle]}>
        <Text>NVDA</Text>
        <Text>엔비디아 뉴스 카드</Text>
        <Text>애니메이션 테스트</Text>
      </Animated.View>

      <Pressable onPress={handleFade} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>Fade</Text>
      </Pressable>

      <Pressable onPress={handleScale} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>Scale</Text>
      </Pressable>

      <Pressable onPress={handleSlide} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>Slide</Text>
      </Pressable>

      <Pressable onPress={handleSpring} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>Spring</Text>
      </Pressable>
    </View>
  );
}
