import { useState } from "react";
import { Text } from "react-native";

import type * as Types from "@/app/(tabs)/index.type";

// 9차시
export function TypeStudy9({ name, age }: Types.TypeStudy9) {
  const [inputName, setInputName] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </>
  );
}
