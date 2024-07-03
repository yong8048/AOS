import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import CheckBox from "@react-native-community/checkbox";

const SignUp = () => {
  const [isFocus, setIsFocus] = useState({
    email: false,
    code: false,
    password: false,
    duplication: false,
  });
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Title>이메일</S.Title>
        <S.InputWithButton $focus={isFocus.email}>
          <S.InputInView
            placeholder="이메일을 입력해주세요."
            placeholderTextColor="#ccc"
            onFocus={() => setIsFocus(prevState => ({ ...prevState, email: true }))}
            onBlur={() => setIsFocus(prevState => ({ ...prevState, email: false }))}
          />
          <S.ButtonConfirm>
            <Text style={{ fontWeight: "800", color: "#fff" }}>인증</Text>
          </S.ButtonConfirm>
        </S.InputWithButton>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Title>인증코드</S.Title>
        <S.AuthenticationView>
          <S.Input
            style={{ flex: 1 }}
            placeholder="인증코드를 입력해주세요."
            placeholderTextColor="#ccc"
            $focus={isFocus.code}
            onFocus={() => setIsFocus(prevState => ({ ...prevState, code: true }))}
            onBlur={() => setIsFocus(prevState => ({ ...prevState, code: false }))}
          />
          <S.ButtonConfirm>
            <Text style={{ fontWeight: "800", color: "#fff" }}>인증 확인</Text>
          </S.ButtonConfirm>
        </S.AuthenticationView>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Title>비밀번호</S.Title>
        <S.Input
          placeholder="비밀번호를 입력해주세요."
          placeholderTextColor="#ccc"
          $focus={isFocus.password}
          onFocus={() => setIsFocus(prevState => ({ ...prevState, password: true }))}
          onBlur={() => setIsFocus(prevState => ({ ...prevState, password: false }))}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Title>비밀번호 확인</S.Title>
        <S.Input
          placeholder="비밀번호를 다시 입력해주세요."
          placeholderTextColor="#ccc"
          $focus={isFocus.duplication}
          onFocus={() => setIsFocus(prevState => ({ ...prevState, duplication: true }))}
          onBlur={() => setIsFocus(prevState => ({ ...prevState, duplication: false }))}
        />
      </S.InputWrapper>
      <S.ProvisionWrapper>
        <CheckBox value={isChecked} onValueChange={setIsChecked} tintColors={{ true: "#5667ff", false: "#5667ff" }} />
        <Text style={{ color: "#000", fontSize: 16, fontWeight: "800" }}>[필수] 개인정보 처리 방침</Text>
        <TouchableOpacity>
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "800" }}>[보기]</Text>
        </TouchableOpacity>
      </S.ProvisionWrapper>
      <S.ButtonSubmit>
        <Text style={{ color: "#fff", fontWeight: "800", fontSize: 20 }}>회원가입</Text>
      </S.ButtonSubmit>
    </S.Container>
  );
};

export default SignUp;
