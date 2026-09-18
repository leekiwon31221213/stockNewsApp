import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from "react-native-reanimated";

export function Lesson45() {
  const [toastMessage, setToastMessage] = useState<string>("");

  const toastOpacity = useSharedValue(0);
  const toastTranslateY = useSharedValue(20);
  const buttonScale = useSharedValue(1);
  const cardScale = useSharedValue(1);

  const animatedToastStyle = useAnimatedStyle(() => {
    return {
      opacity: toastOpacity.value,
      transform: [{ translateY: toastTranslateY.value }],
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: cardScale.value }],
    };
  });

  function showToast(message: string) {
    setToastMessage(message);

    toastOpacity.value = 0;
    toastTranslateY.value = 20;

    toastOpacity.value = withSequence(withTiming(1, { duration: 250 }), withDelay(1000, withTiming(0, { duration: 250 })));

    toastTranslateY.value = withSequence(withTiming(0, { duration: 250 }), withDelay(1000, withTiming(20, { duration: 250 })));
  }

  function handleSave() {
    buttonScale.value = withSequence(withTiming(0.95, { duration: 100 }), withTiming(1, { duration: 100 }));

    showToast("관심 종목에 추가했어요");
  }

  function handleDelete() {
    buttonScale.value = withSequence(withTiming(0.95, { duration: 100 }), withTiming(1, { duration: 100 }));

    showToast("알림을 삭제했어요");
  }

  function handleCardPress() {
    cardScale.value = withSequence(withSpring(1.04), withSpring(1));
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>45차시 - 여러 애니메이션을 순서대로 연결하기</Text>

      <Text>실무에서 자주 쓰는 피드백 애니메이션</Text>

      <Pressable onPress={handleCardPress}>
        <Animated.View style={[styles.gestureCard, animatedCardStyle]}>
          <Text>NVDA</Text>
          <Text>엔비디아 뉴스 카드</Text>
          <Text>카드 선택 시 살짝 커짐</Text>
        </Animated.View>
      </Pressable>

      <Animated.View style={animatedButtonStyle}>
        <Pressable onPress={handleSave} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
          <Text style={styles.btnText}>관심 종목 추가</Text>
        </Pressable>
      </Animated.View>

      <Animated.View style={animatedButtonStyle}>
        <Pressable onPress={handleDelete} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
          <Text style={styles.btnText}>알림 삭제</Text>
        </Pressable>
      </Animated.View>

      {toastMessage !== "" && (
        <Animated.View style={[styles.toastBox, animatedToastStyle]}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
      )}
    </View>
  );
}
