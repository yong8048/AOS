import { Text, View } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import { Formik, FormikErrors } from "formik";
import DatePicker from "react-native-date-picker";
import TitleWithInput from "@/components/Auth/TitleWithInput";
import { userNameSchema } from "@/utils/Yup_Schema";
import TitleWithConfirmInput from "@/components/Auth/TItleWithConfirmInput";

const InputUserInfo = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  const handleCheckValid = (
    setFieldValue: (
      field: string,
      value: any,
    ) => Promise<void | FormikErrors<{ userName: string; validation: boolean }>>,
  ) => {
    // 중복확인 API 추가해야함
    setFieldValue("validation", true);
  };

  return (
    <Formik
      initialValues={{ userName: "", validation: false }}
      onSubmit={value => console.log(value)}
      validationSchema={userNameSchema}
      validateOnMount
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched, isValid }) => (
        <S.Container>
          <View style={{ marginBottom: 20 }}>
            <S.SubTitle>서비스에서 사용할 정보를 입력해주세요!</S.SubTitle>
            <TitleWithConfirmInput
              title="닉네임"
              placeholder="닉네임을 입력해주세요"
              buttonText="중복확인"
              value={values.userName}
              onChangeText={handleChange("userName")}
              onPress={() => handleCheckValid(setFieldValue)}
            >
              {touched.userName && errors.userName && <S.TextError>* {errors.userName}</S.TextError>}
            </TitleWithConfirmInput>
          </View>
          <View style={{ marginBottom: 40 }}>
            <TitleWithInput
              title="생년월일"
              placeholder="생년월일을 입력해주세요"
              value={firstClick ? parseDate(date.toLocaleDateString()) : ""}
              onPress={() => setIsOpen(true)}
              disabled
            />
          </View>
          <DatePicker
            mode="date"
            locale="ko"
            title="생년월일 선택"
            modal
            open={isOpen}
            date={date}
            onCancel={() => setIsOpen(false)}
            onConfirm={date => {
              !firstClick && setFirstClick(true);
              setIsOpen(false);
              setDate(date);
            }}
          />
          <S.ButtonSubmit onPress={() => handleSubmit()} disabled={!isValid} $isValid={isValid}>
            <Text style={{ color: "#fff", fontWeight: "800", fontSize: 20 }}>완료</Text>
          </S.ButtonSubmit>
        </S.Container>
      )}
    </Formik>
  );
};

export default InputUserInfo;

const parseDate = (date: string) => {
  console.log(date);
  const arr = date.split(".");
  return `${arr[0]}년 ${arr[1]}월 ${arr[2]}일`;
};
