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
        authData: action.payload as string[],
      };
    }
    case Actions.SET_REGISTRATION: {
      return {
        ...state,
        authData: action.payload as string[],
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
    default:
      return state;
  }
};

export default authReducer;
