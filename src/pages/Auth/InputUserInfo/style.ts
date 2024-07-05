import { CustomText } from "@/styles/CustomText";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 40px 50px 0;
`;

export const SubTitle = styled(CustomText)`
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled(CustomText)`
  font-size: 20px;
  font-weight: 800;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 6px;
`;

export const InputWithButton = styled.View<{ $focus: boolean }>`
  border: 1px solid;
  border-radius: 10px;
  border-color: ${({ $focus, theme }) => ($focus ? "#000" : theme.colors.place_holder)};
  elevation: ${({ $focus }) => ($focus ? 3 : 0)};
  padding: 8px 10px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  width: 72px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_normal};
  border-radius: 10px;
  justify-content: center;
  elevation: 5;
`;

export const InputInView = styled.TextInput`
  padding: 0;
  font-size: 20px;
  color: #000;
  flex: 1;
`;

export const TextError = styled(CustomText)`
  color: #ff0000;
  font-size: 16px;
  font-weight: 800;
`;
