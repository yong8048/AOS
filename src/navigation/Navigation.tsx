import React from "react";
import { NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Google from "../pages/Google";
import Kakao from "../pages/Kakao";
import Home from "@/pages/Home";
import Bible from "@/pages/Bible";

type StackParamList = {
  Home: undefined;
  Google: undefined;
  Kakao: undefined;
  Bible: undefined;
};

export const useAppNavigation = (): NavigationProp<StackParamList> => {
  return useNavigation<NavigationProp<StackParamList>>();
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="Kakao" component={Kakao} />
        <Stack.Screen name="Bible" component={Bible} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
