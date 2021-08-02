export const Actions = {
  SET_REGISTRATION: "SET_REGISTRATION",
  SET_LOGIN: "SET_LOGIN",
  SET_USER_FULL_NAME: "SET_USER_FULL_NAME",
  SET_AUTH_SUCCEEDED: "SET_AUTH_SUCCEEDED",
  SET_AUTH_FAILED: "SET_AUTH_FAILED",
  SET_IS_AUTHORIZING: "SET_IS_AUTHORIZING",
};

export interface RegistrationActionType {
  type: typeof Actions.SET_REGISTRATION;
  payload: object[];
}

export interface LoginActionType {
  type: typeof Actions.SET_LOGIN;
  payload: object[];
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
  type: typeof Actions.SET_AUTH_SUCCEEDED;
  payload: boolean;
}

export interface IsAuthorizingFailedActionType {
  type: typeof Actions.SET_AUTH_FAILED;
  payload: boolean;
}

export type ActionTypes = RegistrationActionType | LoginActionType | UserFullNameActionType | IsAuthorizingActionType;
