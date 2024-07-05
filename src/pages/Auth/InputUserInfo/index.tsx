import { Text, View } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import { Formik } from "formik";
import theme from "@/styles/theme";
import DatePicker from "react-native-date-picker";
import TitleWithInput from "@/components/Auth/TitleWithInput";
import { nickNameSchema } from "@/utils/Yup_Schema";

const InputUserInfo = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [isFocus, setIsFocus] = useState({
    nickName: false,
    code: false,
  });

  console.log(date);
  return (
    <Formik
      initialValues={{ nickName: "" }}
      onSubmit={value => console.log(value)}
      validationSchema={nickNameSchema}
      validateOnMount
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
        <S.Container>
          <View style={{ marginBottom: 20 }}>
            <S.SubTitle>서비스에서 사용할 정보를 입력해주세요!</S.SubTitle>
            <S.TitleWrapper>
              <S.Title>닉네임</S.Title>
              {touched.nickName && errors.nickName && <S.TextError>* {errors.nickName}</S.TextError>}
            </S.TitleWrapper>
            <S.InputWithButton $focus={isFocus.nickName}>
              <S.InputInView
                placeholder="이메일을 입력해주세요."
                placeholderTextColor={theme.colors.place_holder}
                onFocus={() => setIsFocus(prevState => ({ ...prevState, nickName: true }))}
                onBlur={() => {
                  setIsFocus(prevState => ({ ...prevState, nickName: false }));
                  handleBlur("nickName");
                }}
                onChangeText={handleChange("nickName")}
                maxLength={15}
                value={values.nickName}
              />
              <S.ButtonConfirm onPress={() => handleSubmit()}>
                <Text style={{ fontWeight: "800", color: "#fff" }}>중복확인</Text>
              </S.ButtonConfirm>
            </S.InputWithButton>
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
        </S.Container>
      )}
    </Formik>
  );
};

export default InputUserInfo;

const parseDate = (date: string) => {
  const arr = date.split(".");
  return `${arr[0]}년${arr[1]}월${arr[2]}일`;
};
