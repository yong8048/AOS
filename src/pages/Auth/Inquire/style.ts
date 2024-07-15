import { CustomText } from "@/components/Common/OMGText/style";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: 40px 50px;
`;
export const InputWrapper = styled.View``;
export const InquireContent = styled.TextInput<{ $focus: boolean }>`
  border: 1px solid #222;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const InputInText = styled.Text`
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SendBtn = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #5667ff;
`;

export const BtnInText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
