import React from "react";
import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import Auth from "./auth.routes";
import App from "./app.routes";

export default function Routes() {
  const signed = useSelector((state: any) => state.auth.signed);

  return (
    <NavigationContainer>{signed ? <App /> : <Auth />}</NavigationContainer>
  );
}
