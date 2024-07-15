import { View, Text } from "react-native";
import React from "react";
import * as S from "./style";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import OMGText from "../Common/OMGText";
import { RFValue } from "react-native-responsive-fontsize";

const Header = (props: NativeStackHeaderProps) => {
  return (
    <S.Container>
      <OMGText style={{ fontSize: RFValue(20, 800) }}>{props.route.name}</OMGText>
    </S.Container>
  );
};

export default Header;
