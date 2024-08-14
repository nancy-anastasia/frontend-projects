import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"; // Example slice reducer
import postsReducer from "../slices/postsSlice"; // Another example slice reducer

// Combine the reducers into a single rootReducer
const rootReducer = combineReducers({
  user: userReducer, // 'user' slice managed by userReducer
  posts: postsReducer, // 'posts' slice managed by postsReducer
  // Add more reducers here as your application grows
});

export default rootReducer;
