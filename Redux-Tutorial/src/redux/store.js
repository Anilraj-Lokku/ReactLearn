// store.js
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceCreamReducer,
    // Add other reducers here if you have more
  },
});

export default store;
