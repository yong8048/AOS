import { KeyboardTypeOptions, StyleProp, TextStyle } from "react-native";

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
  multiline?: boolean;
  style?: StyleProp<TextStyle>;
}

interface IPropsTitleWithConfirmInput extends IPropsTitleWithInput {
  buttonText: string;
}

export type { IPropsTitleWithInput, IPropsTitleWithConfirmInput };
