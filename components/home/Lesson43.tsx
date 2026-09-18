import { styles } from "@/app/(tabs)/index.styles";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export function Lesson43() {
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
    });

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>43차시 - 터치·스와이프·드래그 제스처 처리하기</Text>

      <Text>카드를 좌우로 드래그</Text>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.gestureCard, animatedCardStyle]}>
          <Text>NVDA</Text>
          <Text>엔비디아 뉴스 카드</Text>
          <Text>좌우로 밀어보기</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
