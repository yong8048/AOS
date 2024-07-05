import React, { useState } from "react";
import * as S from "./style";
import { IPropsTitleWithConfirmInput } from "@/types/auth";
import theme from "@/styles/theme";
import { Text } from "react-native";

const TitleWithConfirmInput = (props: IPropsTitleWithConfirmInput) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <S.TitleWrapper>
        <S.Title>{props.title}</S.Title>
        {props.children}
      </S.TitleWrapper>
      <S.InputWithButton $focus={isFocus}>
        <S.InputInView
          placeholder={props.placeholder}
          placeholderTextColor={theme.colors.place_holder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChangeText={props.onChangeText}
          value={props.value}
          secureTextEntry={props.secure}
          keyboardType={props.keyboardType || "default"}
        />
        <S.ButtonConfirm onPress={props.onPress}>
          <Text style={{ fontWeight: "800", color: "#fff" }}>인증</Text>
        </S.ButtonConfirm>
      </S.InputWithButton>
    </>
  );
};

export default TitleWithConfirmInput;
