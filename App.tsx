/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import Config from "react-native-config";
import Navigation from "./src/navigation/Navigation";
import ReactQueryProvider from "@/components/Common/ReactQueryProvider";
import { ThemeProvider } from "styled-components/native";
import theme from "@/styles/theme";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

function App(): React.JSX.Element {
  useEffect(() => {
    console.log(Config.GOOGLE_ACCOUNT_CLIENT_ID);
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_ACCOUNT_CLIENT_ID,
    });
  }, []);

  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default App;
