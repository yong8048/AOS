import { KeyboardTypeOptions } from "react-native";

interface IPropsTitleAndInput {
  children?: React.ReactNode;
  title: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secure?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export type { IPropsTitleAndInput };
