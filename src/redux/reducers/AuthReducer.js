import { ACTION_TYPE } from "../../services/constants/Index";
export const initialState = {
  userData: {},
};

export const AuthReducer = (state = initialState, action) => {
  console.log("action.type :>> ", action.type);
  switch (action.type) {
    case ACTION_TYPE.SIGNUP:
      return {
        ...state,
        userData: action.payload,
      };
    case ACTION_TYPE.LOGIN:
      console.log("action.payload :>> ", action.payload);
      localStorage.setItem("token", action.payload.data.data.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload.data.data.data)
      );

      return {
        ...state,
        userData: action.payload.data.data.data,
      };
    case ACTION_TYPE.MATCHTOKEN:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.data));

      return {
        ...state,
        userData: action.payload.data,
      };

    default:
      return state;
  }
};
