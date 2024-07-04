import React from "react";
import { DefaultTheme, NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Google from "../pages/Google";
import Kakao from "../pages/Kakao";
import Home from "@/pages/Home";
import Bible from "@/pages/Bible";
import Auth from "@/pages/Auth";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

type StackParamList = {
  Home: undefined;
  Google: undefined;
  Kakao: undefined;
  Bible: undefined;
  Login: undefined;
  SignUp: undefined;
  Inquire: undefined;
  FindPassword: undefined;
};

export const useAppNavigation = (): NavigationProp<StackParamList> => {
  return useNavigation<NavigationProp<StackParamList>>();
};

export const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="Kakao" component={Kakao} />
        <Stack.Screen name="Bible" component={Bible} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
