import React from "react";
import { DefaultTheme, NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "@/pages/Auth";
import Main from "@/pages/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

interface StackParamList {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Inquire: undefined;
  FindPassword: undefined;
  InputUserInfo: undefined;
}

export const useAppNavigation = (): NavigationProp<StackParamList> => {
  return useNavigation<NavigationProp<StackParamList>>();
};

export const Stack = createNativeStackNavigator();
export const Tabs = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          contentStyle: { minWidth: 360, maxWidth: 720, width: "100%", margin: "auto" },
        }}
      >
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
