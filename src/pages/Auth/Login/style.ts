import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 80px 50px 0;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin-bottom: 6px;
`;

export const Input = styled.TextInput<{ $focus: boolean }>`
  border: 1px solid black;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 20px;
  background-color: #fff;
  elevation: ${({ $focus }) => ($focus ? 10 : 0)};
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary_normal};
  height: 48px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
`;

export const EtcWrapper = styled.View`
  margin-top: 20px;
  margin-bottom: 100px;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  height: 30px;
`;

export const ButtonEtc = styled.TouchableOpacity`
  background-color: #fff;
  flex: 1;
  border: 1px solid #c0c0c0;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  elevation: 5;
`;

export const TextEtc = styled.Text`
  color: #000;
  font-weight: bold;
`;
