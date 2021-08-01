import { Reducer } from "redux";

import { ActionTypes, Actions } from "./actionTypes";

type AuthReducerStateType = {
  isAuthorizing: boolean;
  authData: string[];
  userFullName: string[];
  isAuthorizingSuccessed: boolean;
  isAuthorizingFailed: boolean;
};

const initialState = {
  isAuthorizing: false,
  authData: [],
  userFullName: [],
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
    case Actions.SET_USER_FULL_NAME: {
      return {
        ...state,
        userFullName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
