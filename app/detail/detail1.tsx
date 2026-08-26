import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function DetailScreen() {
  return (
    <View>
      <Text>상세페이지</Text>

      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Text>뒤로가기</Text>
      </Pressable>
    </View>
  );
}
