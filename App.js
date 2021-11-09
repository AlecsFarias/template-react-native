import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Platform, View, Text } from "react-native";

import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import Routes from "./src/routes";

import bucket from "./src/store";

if (Platform.OS === "android") {
  // only android needs polyfill
  require("intl"); // import intl object
  require("intl/locale-data/jsonp/en-IN"); // load the required locale details
}

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={bucket.store}>
        <PersistGate persistor={bucket.persistor}>
          <Routes />
          <StatusBar style="light" />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
