import { Pressable, Text } from "react-native";

import type * as Types from "@/app/(tabs)/index.type";

// 10차시
export function Button_10({ title, onPress }: Types.ButtonProps) {
  return (
    <>
      <Pressable onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </>
  );
}
