import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice";
import movieReducer from "../features/Movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});
