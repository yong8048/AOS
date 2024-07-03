import React from "react";
import { Stack } from "@/navigation/Navigation";
import Intro from "./Intro";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Intro" component={Intro} options={{ headerTitle: "LOGIN" }} />
      <Stack.Screen name="Login" component={Login} options={{ headerTitle: "이메일 로그인" }} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Auth;
