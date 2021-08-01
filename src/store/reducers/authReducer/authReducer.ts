import { Reducer } from "redux";

import { ActionTypes, Actions, RegistrationActionType, LoginActionType } from "./actionTypes";

type AuthReducerStateType = {
  isAuthorizing: boolean;
  authData: string[];
  userLogin: string;
  isAuthorizingSuccessed: boolean;
  isAuthorizingFailed: boolean;
};

const initialState = {
  isAuthorizing: false,
  authData: [],
  userLogin: ``,
  isAuthorizingSuccessed: false,
  isAuthorizingFailed: false,
};

const authReducer: Reducer<AuthReducerStateType, ActionTypes> = (state = initialState, action: ActionTypes): AuthReducerStateType => {
  switch (action.type) {
    case Actions.SET_LOGIN: {
      return {
        ...state,
        authData: action.payload,
      };
    }
    case Actions.SET_REGISTRATION: {
      return {
        ...state,
        authData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
