import { CustomText } from "@/styles/CustomText";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 40px 50px 0;
`;

export const InputWrapper = styled.View`
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 6px;
`;

export const Title = styled(CustomText)`
  font-size: 20px;
  font-weight: 800;
`;

export const InputWithButton = styled.View<{ $focus: boolean }>`
  border: 1px solid;
  border-radius: 10px;
  border-color: ${({ $focus }) => ($focus ? "#000" : "#bdbdbd")};
  elevation: ${({ $focus }) => ($focus ? 3 : 0)};
  padding: 8px 10px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const InputInView = styled.TextInput`
  padding: 0;
  font-size: 20px;
  color: #000;
  flex: 1;
`;

export const AuthenticationView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  padding: 7px 25px;
  background-color: ${({ theme }) => theme.colors.primary_normal};
  border-radius: 10px;
  justify-content: center;
  elevation: 5;
`;

export const Input = styled.TextInput<{ $focus: boolean }>`
  border: 1px solid black;
  border-color: ${({ $focus }) => ($focus ? "#000" : "#bdbdbd")};
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 20px;
  background-color: #fff;
  color: #000;
  elevation: ${({ $focus }) => ($focus ? 3 : 0)};
`;

export const ProvisionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 40px 20px 20px;
`;

export const ButtonSubmit = styled.TouchableOpacity<{ $isValid: boolean }>`
  background-color: ${({ $isValid, theme }) => ($isValid ? theme.colors.primary_normal : "#aaa")};
  padding: 13px 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  elevation: 3;
  margin-bottom: 20px;
`;

export const TextError = styled(CustomText)`
  color: #ff0000;
  font-size: 16px;
  font-weight: 800;
`;
