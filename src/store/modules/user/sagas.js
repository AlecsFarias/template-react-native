import { all, put, call, takeLatest } from "redux-saga/effects";

import { getMeSuccess } from "./actions";
import { signOut } from "../auth/actions";

import api from "../../../services/api";

export function* getMe() {
  try {
    const response = yield call(api.get, "user/me");

    const me = response.data;

    yield put(getMeSuccess(me));
  } catch (error) {
    yield put(signOut());
  }
}

export function* updateMe({ payload }) {
  try {
    const response = yield call(api.put, "user/me", payload.data);

    const me = response.data;

    yield put(getMeSuccess(me));
  } catch (error) {
    yield put(signOut());
  }
}

export default all([
  takeLatest("@user/GET_ME_REQUEST", getMe),
  takeLatest("@user/UPDATE_ME_REQUEST", updateMe),
]);
