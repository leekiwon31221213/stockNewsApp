import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function DetailScreen() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>상세페이지</Text>
      <Text>번호: {params.id}</Text>
      <Text>제목: {params.title}</Text>
      <Text>useLocalSearchParams()</Text>
      <Text>현재 화면으로 전달된 Params를 가져온다.</Text>
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
