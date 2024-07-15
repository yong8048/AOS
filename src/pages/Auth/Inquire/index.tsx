import { View, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import TitleWithInput from "@/components/Auth/TitleWithInput";
import { useAppNavigation } from "@/navigation/Navigation";

const Inquire = () => {
  const navigation = useAppNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [inquireData, setInquireData] = useState({
    email: "",
    title: "",
    content: "",
  });

  const handlePressSendData = () => {
    if (inquireData.email === "") {
      console.log("이메일");
    }
    if (inquireData.title === "") {
      console.log("제목");
    }
    if (inquireData.content === "") {
      console.log("내용");
    }
    if (inquireData.email !== "" && inquireData.title !== "" && inquireData.content !== "") {
      Alert.alert("알림", "문의가 전송되었습니다.", [{ text: "확인", onPress: () => navigation.goBack() }], {
        cancelable: false,
      });
    }
  };
  return (
    <ScrollView>
      <S.Container>
        <View style={{ marginBottom: 20 }}>
          <TitleWithInput
            title="이메일"
            placeholder="답변받으실 이메일을 입력해주세요."
            value={inquireData.email}
            onChangeText={text => setInquireData({ ...inquireData, email: text })}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <TitleWithInput
            title="제목"
            placeholder="제목을 입력해주세요."
            value={inquireData.title}
            onChangeText={text => setInquireData({ ...inquireData, title: text })}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <TitleWithInput
            title="문의 내용"
            placeholder="문의 내용을 입력해주세요."
            value={inquireData.content}
            multiline={true}
            onChangeText={text => setInquireData({ ...inquireData, content: text })}
            style={{ minHeight: 300, textAlignVertical: "top" }}
          />
        </View>

        <S.SendBtn onPress={handlePressSendData}>
          <S.BtnInText>문의하기</S.BtnInText>
        </S.SendBtn>
      </S.Container>
    </ScrollView>
  );
};

export default Inquire;
