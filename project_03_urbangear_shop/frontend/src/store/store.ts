/* Configuration for the Redux store using Redux Toolkit, which enhances setup simplicity 
  and reliability by automatically configuring middleware and enabling Redux DevTools in development  environments.
 */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import {
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

// Configure and export the Redux store. Default middleware from Redux Toolkit includes thunk.
const store = configureStore({
  reducer: rootReducer,
});

// Define RootState and AddDispatch types for use throughout the application
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Custom hooks for typed useDispatch and useSelector
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
