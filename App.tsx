/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import Config from "react-native-config";
import Navigation from "./src/navigation/Navigation";
import { SafeAreaView, Text } from "react-native";

function App(): React.JSX.Element {
  useEffect(() => {
    console.log(Config.GOOGLE_ACCOUNT_CLIENT_ID);
  }, []);
  return <Navigation />;
}

export default App;
