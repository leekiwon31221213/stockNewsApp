import { Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson7() {
  const users = [
    { id: "1", name: "기원" },
    { id: "2", name: "철수" },
    { id: "3", name: "영희" },
  ];

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>7차시 - 배열과 map</Text>

      {users.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
}
