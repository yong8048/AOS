import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import * as S from "./style.ts";
import { useAppNavigation } from "@/navigation/Navigation.tsx";
import { login as kakaoLogin } from "@react-native-seoul/kakao-login";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Intro = () => {
  const navigation = useAppNavigation();

  const handlePressMoveToLogin = () => {
    navigation.navigate("Login");
  };

  const handlePressMoveToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handlePressKakao = async () => {
    try {
      const res = await kakaoLogin();
      Alert.alert("토큰", res.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePressGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      Alert.alert(JSON.stringify(res.user));
    } catch (error) {
      console.error(error);
    }
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
        <S.LoginBtn style={{ backgroundColor: "#FEE500" }} onPress={handlePressKakao}>
          <Image source={require("@/assets/kakao.png")} />
          <S.BtnText>카카오로 시작하기</S.BtnText>
        </S.LoginBtn>
        <S.LoginBtn style={{ backgroundColor: "#FFFFFF" }} onPress={handlePressGoogle}>
          <Image source={require("@/assets/google.png")} />
          <S.BtnText>Google로 시작하기</S.BtnText>
        </S.LoginBtn>
        <S.LoginBtn style={{ backgroundColor: "#5667FF" }} onPress={handlePressMoveToLogin}>
          <Image source={require("@/assets/email.png")} />
          <S.BtnText style={{ color: "#FFFFFF" }}>이메일로 시작하기</S.BtnText>
        </S.LoginBtn>
        <S.MoveSignUp onPress={handlePressMoveToSignUp}>
          <S.MoveSignUpText>이메일로 회원가입</S.MoveSignUpText>
        </S.MoveSignUp>
      </S.LoginBtnWrapper>
      <S.Contact>
        <S.ContactBtn onPress={() => navigation.navigate("Inquire")}>
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
