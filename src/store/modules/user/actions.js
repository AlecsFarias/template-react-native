export function getMeRequest() {
  return {
    type: "@user/GET_ME_REQUEST",
  };
}

export function updateMe(data) {
  return {
    type: "@user/UPDATE_ME_REQUEST",
    payload: { data },
  };
}

export function getMeSuccess(me) {
  return {
    type: "@user/GET_ME_SUCCESS",
    payload: { me },
  };
}
