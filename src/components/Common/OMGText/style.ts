import styled from "styled-components/native";

export const CustomText = styled.Text<{ $isBold: boolean }>`
  font-family: "PretendardVariable";
  color: #000;
  font-weight: ${({ $isBold }) => ($isBold ? "800" : "400")};
`;
