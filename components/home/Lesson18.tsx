import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson18() {
  const queryClient = useQueryClient();

  // 학습용 등록 함수
  async function addNews(title: string) {
    console.log("등록:", title);

    return {
      title: title,
    };
  }

  // 학습용 수정 함수
  async function updateNews(data: { id: number; title: string }) {
    console.log("수정:", data);

    return data;
  }

  // 학습용 삭제 함수
  async function deleteNews(id: number) {
    console.log("삭제:", id);

    return id;
  }

  const addMutation = useMutation({
    mutationFn: addNews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["popularList"],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateNews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["popularList"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["popularList"],
      });
    },
  });
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>18차시 - 데이터 등록·수정·삭제하기</Text>

      <Pressable
        onPress={() => {
          addMutation.mutate("애플 뉴스");
        }}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>등록하기</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          updateMutation.mutate({
            id: 1,
            title: "수정된 뉴스",
          });
        }}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>수정하기</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          deleteMutation.mutate(1);
        }}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>삭제하기</Text>
      </Pressable>
    </View>
  );
}
