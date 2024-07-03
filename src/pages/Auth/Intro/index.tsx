import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as S from "./style.ts";
import { useAppNavigation } from "@/navigation/Navigation.tsx";

const Intro = () => {
  const navigation = useAppNavigation();

  const PressMoveToLogin = () => {
    navigation.navigate("Login");
  };
  const PressMoveToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <S.Container>
      <S.Title>
        <S.TitleTop>
          <Text style={{ fontWeight: "bold" }}>OH MY GOD</Text> 과 {"\n"}신앙생활을 함께하세요!
        </S.TitleTop>
        <S.TitleBottom>여기서 서로 함께 신앙심을 키워보아요</S.TitleBottom>
      </S.Title>
      <S.LoginBtnWrapper>
        <S.LoginBtn style={{ backgroundColor: "#FEE500" }}>
          <Image source={require("@/assets/kakao.png")} />
          <S.BtnText>카카오로 시작하기</S.BtnText>
        </S.LoginBtn>
        <S.LoginBtn style={{ backgroundColor: "#FFFFFF" }}>
          <Image source={require("@/assets/google.png")} />
          <S.BtnText>Google로 시작하기</S.BtnText>
        </S.LoginBtn>
        <S.LoginBtn style={{ backgroundColor: "#5667FF" }} onPress={PressMoveToLogin}>
          <Image source={require("@/assets/email.png")} />
          <S.BtnText style={{ color: "#FFFFFF" }}>이메일로 시작하기</S.BtnText>
        </S.LoginBtn>
        <S.MoveSignUp onPress={PressMoveToSignUp}>
          <S.MoveSignUpText>이메일로 회원가입</S.MoveSignUpText>
        </S.MoveSignUp>
      </S.LoginBtnWrapper>
      <S.Contact>
        <S.ContactBtn>
          <S.ContactBtnText>1:1 문의</S.ContactBtnText>
        </S.ContactBtn>
        <S.ContactBtn>
          <S.ContactBtnText>FAQ</S.ContactBtnText>
        </S.ContactBtn>
      </S.Contact>
    </S.Container>
  );
};

export default Intro;
