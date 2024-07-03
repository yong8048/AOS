import { SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import * as S from "./style";

const Login = () => {
  const [isFocus, setIsFocus] = useState({
    first: false,
    second: false,
  });

  return (
    <S.Container>
      <View style={{ marginBottom: 20 }}>
        <S.Title>이메일</S.Title>
        <S.Input
          placeholder="이메일을 입력해주세요."
          placeholderTextColor="#ccc"
          $focus={isFocus.first}
          onFocus={() => setIsFocus(prevState => ({ ...prevState, first: true }))}
          onBlur={() => setIsFocus(prevState => ({ ...prevState, first: false }))}
        />
      </View>
      <View style={{ marginBottom: 80 }}>
        <S.Title>비밀번호</S.Title>
        <S.Input
          placeholder="비밀번호를 입력해주세요."
          placeholderTextColor="#ccc"
          $focus={isFocus.second}
          onFocus={() => setIsFocus(prevState => ({ ...prevState, second: true }))}
          onBlur={() => setIsFocus(prevState => ({ ...prevState, second: false }))}
        />
      </View>
      <S.ButtonLogin id="login">
        <S.ButtonText>로그인</S.ButtonText>
      </S.ButtonLogin>
      <S.EtcWrapper>
        <S.ButtonEtc id="signUp">
          <S.TextEtc>회원가입</S.TextEtc>
        </S.ButtonEtc>
        <S.ButtonEtc id="findPW">
          <S.TextEtc>비밀번호 찾기</S.TextEtc>
        </S.ButtonEtc>
      </S.EtcWrapper>
    </S.Container>
  );
};

export default Login;
