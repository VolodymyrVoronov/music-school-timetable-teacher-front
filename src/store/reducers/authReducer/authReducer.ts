import { ActionTypes } from "./actions";

import {
  SET_AUTH_FAILED,
  SET_AUTH_SUCCEED,
  SET_IS_AUTHORIZING,
  SET_LOGIN,
  SET_LOGOUT,
  SET_REGISTRATION,
  SET_USER_FULL_NAME,
} from "./actionTypes";

export interface AuthDataType {
  result?: {
    firstName?: string;
    lastName?: string;
  };
  token?: string;
}

interface AuthReducerStateType {
  isAuthorizing: boolean;
  authData: AuthDataType;
  userFullName: string;
  isAuthorizingSucceed: boolean | undefined;
  isAuthorizingFailed: boolean | undefined;
}

const initialState = {
  isAuthorizing: false,
  authData: { result: {} },
  userFullName: "",
  isAuthorizingSucceed: undefined,
  isAuthorizingFailed: undefined,
};

const authReducer = (state: AuthReducerStateType = initialState, action: ActionTypes): AuthReducerStateType => {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...state,
        authData: action.payload.loginData,
      };
    }

    case SET_LOGOUT: {
      localStorage.clear();

      return {
        ...state,
        authData: { result: {} },
        isAuthorizing: (state.isAuthorizing = false),
      };
    }

    case SET_REGISTRATION: {
      return {
        ...state,
        authData: action.payload.registrationData,
      };
    }

    case SET_USER_FULL_NAME: {
      return {
        ...state,
        userFullName: action.payload,
      };
    }

    case SET_IS_AUTHORIZING: {
      return {
        ...state,
        isAuthorizing: action.payload.isAuthorizing,
      };
    }

    case SET_AUTH_SUCCEED: {
      return {
        ...state,
        isAuthorizingSucceed: action.payload.isAuthorizingSucceed,
        isAuthorizingFailed: (state.isAuthorizingFailed = false),
      };
    }

    case SET_AUTH_FAILED: {
      return {
        ...state,
        isAuthorizingFailed: action.payload.isAuthorizingFailed,
        isAuthorizingSucceed: (state.isAuthorizingSucceed = false),
      };
    }
    default:
      return state;
  }
};

export default authReducer;
