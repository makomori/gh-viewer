import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const githubSlice = createSlice({
  name: "github",
  initialState: {
    user: null,
    repositories: [],
    message: "",
  },
  reducers: {
    userLoaded: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    errorOccured: (state, action) => {
      const { message } = action.payload;
      state.message = message;
    },
    reposLoaded: (state, action) => {
      const { repos } = action.payload;
      console.log(repos);
      state.repositories = repos;
    },
  },
});

export function fetchRepositories() {
  return async function fetchRepositoriesThunk(dispatch, getState) {
    const displayingUser = getState().github.user;
    const userId = displayingUser.login;
    const url = `https://api.github.com/users/${userId}/repos`;
    try {
      const res = await axios.get(url);
      dispatch({
        type: "github/reposLoaded",
        payload: { repos: res.data },
      });
    } catch (err) {}
  };
}

export function fetchUser(userId) {
  return async function fetchUserThunk(dispatch, getState) {
    const url = `https://api.github.com/users/${userId}`;
    try {
      const res = await axios.get(url);
      dispatch({
        type: "github/userLoaded",
        payload: { user: res.data },
      });
    } catch (err) {}
  };
}

// export const {} = githubSlice.actions;
export default githubSlice.reducer;
