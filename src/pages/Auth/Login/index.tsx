import { SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import { useAppNavigation } from "@/navigation/Navigation";

const Login = () => {
  const [isFocus, setIsFocus] = useState({
    email: false,
    password: false,
  });

  const navigation = useAppNavigation();

  return (
    <S.Container>
      <View style={{ marginBottom: 20 }}>
        <S.Title>이메일</S.Title>
        <S.Input
          placeholder="이메일을 입력해주세요."
          placeholderTextColor="#ccc"
          $focus={isFocus.email}
          onFocus={() => setIsFocus(prevState => ({ ...prevState, email: true }))}
          onBlur={() => setIsFocus(prevState => ({ ...prevState, email: false }))}
        />
      </View>
      <View style={{ marginBottom: 80 }}>
        <S.Title>비밀번호</S.Title>
        <S.Input
          placeholder="비밀번호를 입력해주세요."
          placeholderTextColor="#ccc"
          $focus={isFocus.password}
          onFocus={() => setIsFocus(prevState => ({ ...prevState, password: true }))}
          onBlur={() => setIsFocus(prevState => ({ ...prevState, password: false }))}
        />
      </View>
      <S.ButtonLogin>
        <S.ButtonText>로그인</S.ButtonText>
      </S.ButtonLogin>
      <S.EtcWrapper>
        <S.ButtonEtc onPress={() => navigation.navigate("SignUp")}>
          <S.TextEtc>회원가입</S.TextEtc>
        </S.ButtonEtc>
        <S.ButtonEtc>
          <S.TextEtc>비밀번호 찾기</S.TextEtc>
        </S.ButtonEtc>
      </S.EtcWrapper>
    </S.Container>
  );
};

export default Login;
