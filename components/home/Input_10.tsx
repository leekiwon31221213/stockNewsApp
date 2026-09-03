import { TextInput } from "react-native";

import type * as Types from "@/app/(tabs)/index.type";

export function Input_10({ value, placeholder, onChangeText, style }: Types.InputProps) {
  return (
    <>
      <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText} style={style}></TextInput>
    </>
  );
}
