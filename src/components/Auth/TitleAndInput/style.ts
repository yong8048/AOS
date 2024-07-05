import { CustomText } from "@/styles/CustomText";
import styled from "styled-components/native";

export const Input = styled.TextInput<{ $focus: boolean }>`
  border: 1px solid;
  border-color: ${({ $focus }) => ($focus ? "#000" : "#bdbdbd")};
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 20px;
  background-color: #fff;
  color: #000;
  elevation: ${({ $focus }) => ($focus ? 3 : 0)};
`;

export const Title = styled(CustomText)`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 6px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 6px;
`;
