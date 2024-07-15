import React from "react";
import * as S from "./style";
import { TextProps } from "react-native";

interface ICustomTextProps extends TextProps {
  $isBold?: boolean;
}

const OMGText: React.FC<ICustomTextProps> = ({ style, $isBold, ...rest }) => {
  return <S.CustomText style={style} {...rest} allowFontScaling={false} $isBold />;
};

export default OMGText;
