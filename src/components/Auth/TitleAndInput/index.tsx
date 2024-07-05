import React, { Children, useState } from "react";
import { IPropsTitleAndInput } from "@/types/auth";
import * as S from "./style";

const TitleAndInput = (props: IPropsTitleAndInput) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <S.TitleWrapper>
        <S.Title>{props.title}</S.Title>
        {props.children}
      </S.TitleWrapper>
      <S.Input
        placeholder={props.placeholder}
        placeholderTextColor="#bdbdbd"
        $focus={isFocus}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secure}
        keyboardType={props.keyboardType || "default"}
      />
    </>
  );
};

export default TitleAndInput;
