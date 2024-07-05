import { SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import { useAppNavigation } from "@/navigation/Navigation";
import TitleWithInput from "@/components/Auth/TitleWithInput";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigation = useAppNavigation();

  return (
    <S.Container>
      <View style={{ marginBottom: 20 }}>
        <TitleWithInput
          title="이메일"
          placeholder="이메일을 입력해주세요."
          value={loginData.email}
          onChangeText={text => setLoginData({ ...loginData, email: text })}
        />
      </View>
      <View style={{ marginBottom: 80 }}>
        <TitleWithInput
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={loginData.password}
          onChangeText={text => setLoginData({ ...loginData, password: text })}
          secure
        />
      </View>
      <S.ButtonLogin onPress={() => navigation.navigate("InputUserInfo")}>
        <S.ButtonText>로그인</S.ButtonText>
      </S.ButtonLogin>
      <S.EtcWrapper>
        <S.ButtonEtc onPress={() => navigation.navigate("SignUp")}>
          <S.TextEtc>회원가입</S.TextEtc>
        </S.ButtonEtc>
        <S.ButtonEtc onPress={() => navigation.navigate("FindPassword")}>
          <S.TextEtc>비밀번호 찾기</S.TextEtc>
        </S.ButtonEtc>
      </S.EtcWrapper>
    </S.Container>
  );
};

export default Login;
