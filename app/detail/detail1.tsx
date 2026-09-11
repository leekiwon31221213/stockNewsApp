import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function DetailScreen() {
  const params = useLocalSearchParams();
  console.log("디테일 화면 id", params.id);
  return (
    <View>
      <Text>상세페이지</Text>
      <Text>번호: {params.id}</Text>
      <Text>제목: {params.title}</Text>
      <Text>useLocalSearchParams()</Text>
      <Text>현재 화면으로 전달된 Params를 가져온다.</Text>

      <View>
        <Text>29. 푸시 알림이나 링크를 눌러 원하는 화면으로 이동하기 뉴스 상세 화면</Text>

        <Text>알림으로 넘어온 id: {params.id}</Text>
      </View>

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
