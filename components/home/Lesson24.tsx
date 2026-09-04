import { styles } from "@/app/(tabs)/index.styles";
import { useUserStore } from "@/store/userStore";
import { Pressable, Text, View } from "react-native";

export function Lesson24() {
  const userName = useUserStore((state) => state.userName);
  const setUserName = useUserStore((state) => state.setUserName);

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>24차시 - Zustand로 여러 화면에서 데이터 같이 사용하기</Text>
      <Text>{userName}</Text>
      <Pressable
        onPress={() => {
          setUserName("철수");
        }}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>이름변경</Text>
      </Pressable>
    </View>
  );
}
