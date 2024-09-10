import React, { useState } from "react";
import * as S from "./style";
import theme from "@/styles/theme";
import { Pressable } from "react-native";
import { IPropsTitleWithInput } from "@/types/auth";

const TitleAndInput = (props: IPropsTitleWithInput) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <S.TitleWrapper>
        <S.Title>{props.title}</S.Title>
        {props.children}
      </S.TitleWrapper>
      <Pressable onPress={props.onPress}>
        <S.Input
          placeholder={props.placeholder}
          placeholderTextColor={theme.colors.place_holder}
          $focus={isFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChangeText={props.onChangeText}
          value={props.value}
          secureTextEntry={props.secure}
          keyboardType={props.keyboardType || "default"}
          editable={props.disabled && false}
          multiline={props.multiline}
          style={props.style}
        />
      </Pressable>
    </>
  );
};

export default TitleAndInput;
