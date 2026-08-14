import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const { width: width1, height: height1 } = Dimensions.get("window");
  const { width: width2, height: height2 } = useWindowDimensions();
  const handlePress = () => {
    alert("버튼클릭");
  };
  const styles = StyleSheet.create({
    container: { backgroundColor: "#f1f1f1", alignItems: "center" },
    container__inner: {
      flexDirection: "column",
    },
    title: {
      fontSize: 20,
      color: "black",
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
  });
  return (
    <>
      <SafeAreaView>
        <StatusBar style="auto"></StatusBar>

        <View style={styles.container}>
          <View style={styles.container__inner}>
            <Text>안녕하세요</Text>
            <Text>방갑습니다</Text>
            <Text>
              프론트엔드 개발자
              <Text>React Native 공부 중</Text>
            </Text>
          </View>

          <Image source={{ uri: "https://iili.io/CO0IkAl.png" }} style={{ width: 100, height: 100 }}></Image>
          <Image source={require("@/assets/images/img1.png")} style={{ width: 100, height: 100 }}></Image>
          <Pressable onPress={handlePress}>
            <Text style={styles.title}>버튼</Text>
          </Pressable>

          <SafeAreaView>
            <Text>휴대폰의 안전한 영역 (상태바와 안겹치게)</Text>

            <Text>Dimensions 가로{width1}</Text>
            <Text>Dimensions 세로{height1}</Text>

            <Text>useWindowDimensions 가로{width2}</Text>
            <Text>useWindowDimensions 세로{height2}</Text>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </>
  );
}
