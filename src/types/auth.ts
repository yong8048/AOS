import { KeyboardTypeOptions } from "react-native";

interface IPropsTitleWithInput {
  children?: React.ReactNode;
  title: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  value: string;
  secure?: boolean;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
}

interface IPropsTitleWithConfirmInput {
  children?: React.ReactNode;
  title: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  onPress: () => void;
  value: string;
  secure?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export type { IPropsTitleWithInput, IPropsTitleWithConfirmInput };
