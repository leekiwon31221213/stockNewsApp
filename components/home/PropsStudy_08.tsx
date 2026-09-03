import { Text } from "react-native";

import type * as Types from "@/app/(tabs)/index.type";

// 8차시
export function PropsStudy_8({ name }: Types.PropsStudy8Props) {
  return (
    <>
      <Text>{name}</Text>
    </>
  );
}
