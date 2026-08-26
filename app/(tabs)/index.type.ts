import type { StyleProp, TextStyle } from "react-native";

export interface PropsStudy8Props {
  name: string;
}

export interface TypeStudy9 {
  name: string;
  age: number;
  isLogin: boolean;
}

export type ButtonProps = {
  title: string;
  onPress: () => void;
};

export type InputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<TextStyle>;
};

export type ModalProps = {
  visible: boolean;
  onClose: () => void;
};
