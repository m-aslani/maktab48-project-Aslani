import { ActionTypeUserInfo } from "../constants/action-type";

const initialState = {
  user: {},
};

export const userInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypeUserInfo.ADD_USER_INFO:
      return { ...state.user, user: payload };

    default:
      return state;
  }
};
