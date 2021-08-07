import { AuthDataType } from "./authReducer";

export const Actions = {
  SET_LOGIN: "auth/SET_LOGIN",
  SET_LOGOUT: "auth/LOGOUT",
  SET_REGISTRATION: "auth/SET_REGISTRATION",
  SET_USER_FULL_NAME: "auth/SET_USER_FULL_NAME",
  SET_AUTH_SUCCEED: "auth/SET_AUTH_SUCCEED",
  SET_AUTH_FAILED: "auth/SET_AUTH_FAILED",
  SET_IS_AUTHORIZING: "auth/SET_IS_AUTHORIZING",
};

export interface LoginActionType {
  type: typeof Actions.SET_LOGIN;
  payload: AuthDataType;
}

export interface LogoutActionType {
  type: typeof Actions.SET_LOGOUT;
}

export interface RegistrationActionType {
  type: typeof Actions.SET_REGISTRATION;
  payload: AuthDataType;
}

export interface UserFullNameActionType {
  type: typeof Actions.SET_USER_FULL_NAME;
  payload: string[];
}

export interface IsAuthorizingActionType {
  type: typeof Actions.SET_IS_AUTHORIZING;
  payload: boolean;
}

export interface IsAuthorizingSucceessedActionType {
  type: typeof Actions.SET_AUTH_SUCCEED;
  payload: boolean;
}

export interface IsAuthorizingFailedActionType {
  type: typeof Actions.SET_AUTH_FAILED;
  payload: boolean;
}

export type ActionTypes = RegistrationActionType | LoginActionType | UserFullNameActionType | IsAuthorizingActionType;
