import { CustomText } from "@/styles/CustomText";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: 40px 20px 0 20px;
`;

export const Title = styled.View`
  width: 100%;
  justify-content: center;
`;
export const TitleTop = styled(CustomText)`
  margin-bottom: 10px;
  font-size: 26px;
  text-align: center;
  color: #000;
`;
export const TitleBottom = styled(CustomText)`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #999;
`;

export const LoginBtnWrapper = styled.View`
  width: 100%;
  margin: 40px 0 20px 0;
`;
export const LoginBtn = styled.TouchableOpacity`
  width: 100%;
  text-align: center;
  height: 48px;
  border-radius: 10px;
  elevation: 5;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const BtnText = styled(CustomText)`
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  color: #000;
`;

export const MoveSignUp = styled.TouchableOpacity`
  align-items: center;
`;
export const MoveSignUpText = styled(CustomText)`
  text-decoration-line: underline;
  font-size: 12px;
`;

export const Contact = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
export const ContactBtn = styled.TouchableOpacity`
  width: 49%;
  height: 68px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  elevation: 2;
`;
export const ContactBtnText = styled(CustomText)`
  text-align: center;
  line-height: 68px;
  font-weight: bold;
  color: #000;
`;
