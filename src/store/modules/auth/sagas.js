import { all, takeLatest, call, put } from "redux-saga/effects";
import { Alert } from "react-native";

import api from "../../../services/api";

import { signInSucess, signFailure, signOut } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "/user/login", {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSucess(token, user));
  } catch (error) {
    Alert.alert(
      "Erro",
      error?.response?.data?.error || "Parece que sus datos son incorrectos."
    );

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    let { data, address } = payload;

    if (data.method === "google") {
      data.google_id = data.token;

      delete data.mehtod;
    }

    if (data.method === "facebook") {
      data.facebook_id = data.token;

      delete data.mehtod;
    }

    delete data.token;

    const response = yield call(api.post, "/user", {
      ...data,
      address: { ...address, state: "Parana", city: "Foz do Iguaçu" },
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    Alert.alert("Oikoite", "Su cuenta ha sido creada con éxito!");

    yield put(signInSucess(token, user));
  } catch (error) {
    Alert.alert(
      "Erro",
      error?.response?.data?.error || "Parece que sus datos son incorrectos."
    );

    yield put(signFailure());
  }
}

export function* setTokenRefresh({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    yield put(signOut());
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("persist/REHYDRATE", setTokenRefresh),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
]);
