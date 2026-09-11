import { styles } from "@/app/(tabs)/index.styles";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Pressable, Text, View } from "react-native";

export function Lesson26() {
  async function handleCamera() {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      console.log("카메라 권한이 없습니다.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      console.log("촬영한 이미지", result.assets[0].uri);
    }
  }

  async function handleLocation() {
    const permission = await Location.requestForegroundPermissionsAsync();

    if (!permission.granted) {
      console.log("위치 권한이 없습니다.");
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync();

      console.log("현재 위도", location.coords.latitude);

      console.log("현재 경도", location.coords.longitude);
    } catch (error) {
      console.log("현재 위치를 가져오지 못했습니다.", error);
    }
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>26차시 - 갤러리에서 사진 선택하고 서버에 업로드하기</Text>

      <Pressable onPress={handleCamera} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}> 카메라 실행</Text>
      </Pressable>

      <Pressable onPress={handleLocation} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}> 현재 위치 확인</Text>
      </Pressable>
    </View>
  );
}
