import { Image, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson2() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>2차시 - Image</Text>

      <Image source={{ uri: "https://iili.io/CO0IkAl.png" }} style={styles.image}></Image>
      <Image source={require("@/assets/images/img1.png")} style={styles.image}></Image>
    </View>
  );
}
