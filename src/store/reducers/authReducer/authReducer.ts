import { Reducer } from "redux";

import { ActionTypes, Actions } from "./actionTypes";

type AuthReducerStateType = {
  isAuthorizing: boolean;
  authData: object[];
  userFullName: string[];
  isAuthorizingSuccessed: boolean | undefined;
  isAuthorizingFailed: boolean | undefined;
};

const initialState = {
  isAuthorizing: false,
  authData: [],
  userFullName: [],
  isAuthorizingSuccessed: undefined,
  isAuthorizingFailed: undefined,
};

const authReducer: Reducer<AuthReducerStateType, ActionTypes> = (state = initialState, action: ActionTypes): AuthReducerStateType => {
  switch (action.type) {
    case Actions.SET_LOGIN: {
      return {
        ...state,
        authData: action.payload as object[],
      };
    }

    case Actions.SET_REGISTRATION: {
      return {
        ...state,
        authData: action.payload as object[],
      };
    }

    case Actions.SET_USER_FULL_NAME: {
      return {
        ...state,
        userFullName: action.payload as string[],
      };
    }

    case Actions.SET_IS_AUTHORIZING: {
      return {
        ...state,
        isAuthorizing: action.payload as boolean,
      };
    }

    case Actions.SET_AUTH_SUCCEEDED: {
      return {
        ...state,
        isAuthorizingSuccessed: action.payload as boolean,
        isAuthorizingFailed: (state.isAuthorizingFailed = false),
      };
    }

    case Actions.SET_AUTH_FAILED: {
      return {
        ...state,
        isAuthorizingFailed: action.payload as boolean,
        isAuthorizingSuccessed: (state.isAuthorizingSuccessed = false),
      };
    }
    default:
      return state;
  }
};

export default authReducer;
