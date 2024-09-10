import { View, ScrollView } from "react-native";
import React from "react";
import * as S from "./style";
import TitleWithInput from "@/components/Auth/TitleWithInput";
import { useAppNavigation } from "@/navigation/Navigation";
import { Formik } from "formik";
import { inquireSchema } from "@/utils/Yup_Schema";

const Inquire = () => {
  const navigation = useAppNavigation();

  return (
    <Formik
      initialValues={{ email: "", title: "", content: "" }}
      onSubmit={value => console.log(value)}
      validateOnMount
      validationSchema={inquireSchema}
    >
      {({ handleSubmit, handleChange, values, errors, isValid, touched }) => (
        <ScrollView>
          <S.Container>
            <View style={{ marginBottom: 20 }}>
              <TitleWithInput
                title="이메일"
                placeholder="답변받으실 이메일을 입력해주세요."
                value={values.email}
                onChangeText={handleChange("email")}
              >
                {touched.email && errors.email && <S.TextError>* {errors.email}</S.TextError>}
              </TitleWithInput>
            </View>
            <View style={{ marginBottom: 20 }}>
              <TitleWithInput
                title="제목"
                placeholder="제목을 입력해주세요."
                value={values.title}
                onChangeText={handleChange("title")}
              >
                {touched.title && errors.title && <S.TextError>* {errors.title}</S.TextError>}
              </TitleWithInput>
            </View>
            <View style={{ marginBottom: 20 }}>
              <TitleWithInput
                title="문의 내용"
                placeholder="문의 내용을 입력해주세요."
                value={values.content}
                multiline
                onChangeText={handleChange("content")}
                style={{ minHeight: 300, textAlignVertical: "top" }}
              >
                {touched.content && errors.content && <S.TextError>* {errors.content}</S.TextError>}
              </TitleWithInput>
            </View>

            <S.SendBtn onPress={() => handleSubmit()} disabled={!isValid} $isValid={isValid}>
              <S.BtnInText>문의하기</S.BtnInText>
            </S.SendBtn>
          </S.Container>
        </ScrollView>
      )}
    </Formik>
  );
};

export default Inquire;
