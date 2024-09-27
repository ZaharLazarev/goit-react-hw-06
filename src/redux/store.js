import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtersReducer from "./filtersSlice"
import contactsReducer from "./contactsSlice"

const persistContactsReducer = persistReducer(
  {
    key:"contacts",
    storage,
    whitelist:["items"]
  },
    contactsReducer
);

const persistFiltersReducer = persistReducer(
  {
    key:"filters",
    storage,
    whitelist:["filterItems"]
  },
  filtersReducer
);

export const store = configureStore({
  reducer:{
    contacts:persistContactsReducer,
    filters:persistFiltersReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);