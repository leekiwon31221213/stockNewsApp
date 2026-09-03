import { ScrollView, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson6() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>6차시 - ScrollView</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text>ScrollView horizontal 가로스크롤</Text>
        <Text>{'ScrollView showsVerticalScrollIndicator="Boolean" 스크롤 표시'}</Text>

        <Text>스크롤 안쪽의 내용에 스타일을 적용하고 싶을 때 contentContainerStyle을 사용</Text>
        <Text>style과 contentContainerStyle 차이</Text>
        <Text>style: ScrollView 자체</Text>
        <Text>contentContainerStyle: ScrollView 안에 들어있는 내용</Text>
      </ScrollView>
    </View>
  );
}
