import { styles } from "@/app/(tabs)/index.styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import { Pressable, Text, View } from "react-native";

export function Lesson42() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => {
    return ["25%", "50%"];
  }, []);

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.expand();
  }

  function handleCloseBottomSheet() {
    bottomSheetRef.current?.close();
  }
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>42차시 - 아래에서 올라오는 Bottom Sheet 만들기</Text>

      <Pressable onPress={handleOpenBottomSheet} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
        <Text style={styles.btnText}>Bottom Sheet 열기</Text>
      </Pressable>

      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
        <BottomSheetView>
          <Text>종목 옵션</Text>
          <Text>관심 종목 추가</Text>
          <Text>뉴스 알림 설정</Text>
          <Text>관련 뉴스 보기</Text>
          <Pressable onPress={handleCloseBottomSheet} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
            <Text style={styles.btnText}>Bottom Sheet 닫기</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
