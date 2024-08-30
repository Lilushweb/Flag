import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flagGetApi from "../server/flagGetApi";

const rootReducer = combineReducers({
  [flagGetApi.reducerPath]: flagGetApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(flagGetApi.middleware),
  });
};

export default setupStore;
