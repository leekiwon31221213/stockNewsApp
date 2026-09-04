import { styles } from "@/app/(tabs)/index.styles";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export function Lesson25() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  async function handlePickImage() {
    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  async function handleUpload() {
    const formData = new FormData();

    if (!imageUri) {
      return;
    }

    const imageFile = {
      uri: imageUri,
      name: "image.jpg",
      type: "image/jpeg",
    };
    formData.append("file", imageFile as any);
    console.log("업로드할 이미지", imageFile);
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>25차시 - 갤러리에서 사진 선택하고 서버에 업로드하기</Text>

      <Pressable onPress={handlePickImage} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>사진 선택</Text>
      </Pressable>

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: 200,
            height: 200,
          }}
        ></Image>
      )}

      <Pressable onPress={handleUpload} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>사진 업로드</Text>
      </Pressable>
    </View>
  );
}
