import { TOGGLE } from "./types";

const INITIAL_STATE = {
  isChecked: false,
};

export const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE: {
      return { ...state, isChecked: !state.isChecked };
    }
    default: {
      return { ...state };
    }
  }
};
