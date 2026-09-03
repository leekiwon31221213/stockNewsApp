import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pressable, Text, View } from "react-native";

import { styles } from "@/app/(tabs)/index.styles";

export function Lesson17() {
  const queryClient = useQueryClient();

  // 실제 수정 API 대신 사용하는 학습용 함수
  async function updateName(name: string) {
    console.log("수정할 이름:", name);

    return {
      name: name,
    };
  }

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: updateName,

    onSuccess: () => {
      console.log("수정 성공");

      queryClient.invalidateQueries({
        queryKey: ["popularList"],
      });
    },
  });

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>17차시 - 데이터 변경 후 화면 데이터 새로 불러오기</Text>

      <Pressable
        onPress={() => {
          mutate("철수");
        }}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>이름 수정하기</Text>
      </Pressable>

      {isPending && <Text>수정 중...</Text>}

      {isError && <Text>수정에 실패했습니다.</Text>}

      {isSuccess && <Text>수정에 성공했습니다.</Text>}
    </View>
  );
}
