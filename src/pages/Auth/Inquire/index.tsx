import { View, Text, TextInput, ScrollView, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import * as S from "./style";
const Inquire = () => {
  return (
    <ScrollView>
      <S.Container>
        <S.InputWrapper>
          <S.InputInText>이메일</S.InputInText>
          <S.TI placeholder="이메일을 입력해주세요." placeholderTextColor={"#999"} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputInText>제목</S.InputInText>
          <S.TI placeholder="제목을 입력해주세요." placeholderTextColor={"#999"} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputInText>내용</S.InputInText>
          <S.TI
            placeholder="문의 내용을 입력해주세요."
            multiline={true}
            placeholderTextColor={"#999"}
            style={{ minHeight: 300, textAlignVertical: "top" }}
          />
        </S.InputWrapper>

        <S.SendBtn>
          <S.BtnInText>문의하기</S.BtnInText>
        </S.SendBtn>
      </S.Container>
    </ScrollView>
  );
};

export default Inquire;
