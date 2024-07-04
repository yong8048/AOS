import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import CheckBox from "@react-native-community/checkbox";
import { Formik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("유효한 이메일을 입력해주세요.").required("이메일은 필수 입력 항목입니다."),
  code: Yup.string().required("인증코드는 필수 입력 항목입니다."),
  password: Yup.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다.").required("비밀번호는 필수 입력 항목입니다."),
  duplication: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인은 필수 입력 항목입니다."),
  isChecked: Yup.boolean().oneOf([true], "개인정보 처리 방침에 동의해야 합니다."),
});

const SignUp = () => {
  const [isFocus, setIsFocus] = useState({
    email: false,
    code: false,
    password: false,
    duplication: false,
  });

  return (
    <Formik
      initialValues={{ email: "", code: "", password: "", duplication: "", isChecked: false }}
      validationSchema={signUpSchema}
      onSubmit={value => console.log(value)}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isValid }) => (
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
              <S.ButtonConfirm>
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
              <S.ButtonConfirm>
                <Text style={{ fontWeight: "800", color: "#fff" }}>인증 확인</Text>
              </S.ButtonConfirm>
            </S.AuthenticationView>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.TitleWrapper>
              <S.Title>비밀번호</S.Title>
              {touched.password && errors.password && <S.TextError>* {errors.password}</S.TextError>}
            </S.TitleWrapper>
            <S.Input
              placeholder="비밀번호를 입력해주세요."
              placeholderTextColor="#ccc"
              $focus={isFocus.password}
              onFocus={() => setIsFocus(prevState => ({ ...prevState, password: true }))}
              onBlur={() => {
                setIsFocus(prevState => ({ ...prevState, password: false }));
                handleBlur("password");
              }}
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.TitleWrapper>
              <S.Title>비밀번호 확인</S.Title>
              {touched.duplication && errors.duplication && <S.TextError>* {errors.duplication}</S.TextError>}
            </S.TitleWrapper>
            <S.Input
              placeholder="비밀번호를 다시 입력해주세요."
              placeholderTextColor="#ccc"
              $focus={isFocus.duplication}
              onFocus={() => setIsFocus(prevState => ({ ...prevState, duplication: true }))}
              onBlur={() => {
                setIsFocus(prevState => ({ ...prevState, duplication: false }));
                handleBlur("duplication");
              }}
              onChangeText={handleChange("duplication")}
              value={values.duplication}
              secureTextEntry
            />
          </S.InputWrapper>
          <S.ProvisionWrapper>
            <CheckBox
              value={values.isChecked}
              onValueChange={value => setFieldValue("isChecked", value)}
              tintColors={{ true: "#5667ff", false: "#5667ff" }}
            />
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "800" }}>[필수] 개인정보 처리 방침</Text>
            <TouchableOpacity>
              <Text style={{ color: "#000", fontSize: 16, fontWeight: "800" }}>[보기]</Text>
            </TouchableOpacity>
          </S.ProvisionWrapper>
          {touched.isChecked && errors.isChecked && <S.TextError>* {errors.isChecked}</S.TextError>}
          <S.ButtonSubmit onPress={() => handleSubmit()} disabled={!isValid} $isValid={isValid}>
            <Text style={{ color: "#fff", fontWeight: "800", fontSize: 20 }}>회원가입 {isValid}</Text>
          </S.ButtonSubmit>
        </S.Container>
      )}
    </Formik>
  );
};

export default SignUp;
