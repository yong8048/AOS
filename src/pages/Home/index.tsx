import { View, Text, Button } from "react-native";
import React from "react";
import { useAppNavigation } from "@/navigation/Navigation";
import * as S from "./style";

const Home = () => {
  const navigation = useAppNavigation();
  return (
    <S.MainView>
      <S.NavigationButton
        onPress={() => {
          navigation.navigate("Google");
        }}
      >
        <Text>구글</Text>
      </S.NavigationButton>
      <S.NavigationButton
        onPress={() => {
          navigation.navigate("Kakao");
        }}
      >
        <Text>카카오</Text>
      </S.NavigationButton>
      <S.NavigationButton
        onPress={() => {
          navigation.navigate("Bible");
        }}
      >
        <Text>성경</Text>
      </S.NavigationButton>
    </S.MainView>
  );
};

export default Home;
