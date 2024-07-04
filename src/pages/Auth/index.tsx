import React from "react";
import { Stack } from "@/navigation/Navigation";
import Intro from "./Intro";
import Login from "./Login";
import SignUp from "./SignUp";
import FindPassword from "./FindPassword";

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "PretendardVariable", fontWeight: "800" },
      }}
    >
      <Stack.Screen name="Intro" component={Intro} options={{ headerTitle: "LOGIN" }} />
      <Stack.Screen name="Login" component={Login} options={{ headerTitle: "이메일 로그인" }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: "이메일 회원가입" }} />
      <Stack.Screen name="FindPassword" component={FindPassword} options={{ headerTitle: "비밀번호 찾기" }} />
    </Stack.Navigator>
  );
};

export default Auth;
