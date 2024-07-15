import React from "react";
import { Tabs } from "@/navigation/Navigation";
import Home from "./Home";
import Intro from "../Auth/Intro";
import Login from "../Auth/Login";

const Main = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "PretendardVariable",
          fontWeight: "800",
          // fontSize: RFValue(20, 800),
        },
        headerStyle: {
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "#000000",
        },
        // header: props => Header(props),
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Group" component={Intro} />
      <Tabs.Screen name="test1" component={Login} options={{ tabBarStyle: { display: "none" } }} />
      <Tabs.Screen name="test2" component={Login} />
      <Tabs.Screen name="test3" component={Home} />
    </Tabs.Navigator>
  );
};

export default Main;
