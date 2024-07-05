import { signUpSchema } from "@/utils/Yup_Schema";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import * as S from "./style";
import { Animated, Text, View } from "react-native";
import TitleAndInput from "@/components/Auth/TitleAndInput";

const FindPassword = () => {
  const [isFocus, setIsFocus] = useState({
    email: false,
    code: false,
  });

  const translateXAnim = useRef(new Animated.Value(500)).current;

  const start_fadeAnim = () => {
    Animated.spring(translateXAnim, {
      toValue: 0,
      useNativeDriver: true,
      isInteraction: true,
    }).start();
  };

  const handleSendEmail = () => {};

  const handleCheckCode = () => {
    // 인증 코드 확인해서 맞으면
    start_fadeAnim();
  };

  const handleChangePassword = (value: { email: string; code: string; password: string; duplication: string }) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={{ email: "", code: "", password: "", duplication: "" }}
      validationSchema={signUpSchema}
      onSubmit={handleChangePassword}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
        <S.Container>
          <S.InputWrapper>
            <S.TitleWrapper>
              <S.Title>이메일</S.Title>
              {touched.email && errors.email && <S.TextError>* {errors.email}</S.TextError>}
            </S.TitleWrapper>
            <S.InputWithButton $focus={isFocus.email}>
              <S.InputInView
                placeholder="이메일을 입력해주세요."
                placeholderTextColor="#ccc"
                onFocus={() => setIsFocus(prevState => ({ ...prevState, email: true }))}
                onBlur={() => {
                  setIsFocus(prevState => ({ ...prevState, email: false }));
                  handleBlur("email");
                }}
                onChangeText={handleChange("email")}
                value={values.email}
              />
              <S.ButtonConfirm onPress={handleSendEmail}>
                <Text style={{ fontWeight: "800", color: "#fff" }}>인증</Text>
              </S.ButtonConfirm>
            </S.InputWithButton>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.TitleWrapper>
              <S.Title>인증코드</S.Title>
              {touched.code && errors.code && <S.TextError>* {errors.code}</S.TextError>}
            </S.TitleWrapper>
            <S.AuthenticationView>
              <S.Input
                style={{ flex: 1 }}
                placeholder="인증코드를 입력해주세요."
                placeholderTextColor="#ccc"
                $focus={isFocus.code}
                onFocus={() => setIsFocus(prevState => ({ ...prevState, code: true }))}
                onBlur={() => {
                  setIsFocus(prevState => ({ ...prevState, code: false }));
                  handleBlur("code");
                }}
                onChangeText={handleChange("code")}
                value={values.code}
              />
              <S.ButtonConfirm onPress={handleCheckCode}>
                <Text style={{ fontWeight: "800", color: "#fff" }}>인증 확인</Text>
              </S.ButtonConfirm>
            </S.AuthenticationView>
          </S.InputWrapper>
          <Animated.View style={{ transform: [{ translateY: translateXAnim }] }}>
            <S.SubTitle>비밀번호 재설정</S.SubTitle>
            <View style={{ marginBottom: 20 }}>
              <TitleAndInput
                title="비밀번호"
                placeholder="새 비밀번호를 입력해주세요"
                value={values.password}
                onChangeText={handleChange("password")}
                secure
              >
                {touched.password && errors.password && <S.TextError>* {errors.password}</S.TextError>}
              </TitleAndInput>
            </View>
            <View style={{ marginBottom: 20 }}>
              <TitleAndInput
                title="비밀번호 확인"
                placeholder="새 비밀번호를 다시 입력해주세요"
                value={values.duplication}
                onChangeText={handleChange("duplication")}
                secure
              >
                {touched.duplication && errors.duplication && <S.TextError>* {errors.duplication}</S.TextError>}
              </TitleAndInput>
            </View>
            <S.ButtonSubmit onPress={() => handleSubmit()} disabled={!isValid} $isValid={isValid}>
              <Text style={{ color: "#fff", fontWeight: "800", fontSize: 20 }}>비밀번호 변경</Text>
            </S.ButtonSubmit>
          </Animated.View>
        </S.Container>
      )}
    </Formik>
  );
};

export default FindPassword;
