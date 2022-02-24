const { FETCH_POSTS_ERROR } = require("./types");
const { FETCH_POSTS_SUCCESS } = require("./types");
const { FETCH_POSTS_REQUEST } = require("./types");
const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  isError: false,
};

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case FETCH_POSTS_SUCCESS: {
      return { ...state, posts: action.payload.posts, isLoading: false };
    }
    case FETCH_POSTS_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
