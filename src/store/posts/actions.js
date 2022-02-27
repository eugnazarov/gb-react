import axios from "axios";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./types";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_POSTS_REQUEST });
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      dispatch({ type: FETCH_POSTS_SUCCESS, payload: { posts: res.data } });
    } catch (e) {
      dispatch({ type: FETCH_POSTS_ERROR });
    }
  };
};
