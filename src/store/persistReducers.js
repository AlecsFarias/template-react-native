import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "template-AlecsFarias",
      storage: AsyncStorage,
      whitelist: ["auth", "user"],
    },
    reducers
  );

  return persistedReducer;
};
