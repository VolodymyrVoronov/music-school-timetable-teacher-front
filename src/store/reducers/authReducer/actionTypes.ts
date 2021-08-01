export interface RegistrationActionType {
  type: "SET_REGISTRATION";
  payload: string[];
}

export interface LoginActionType {
  type: "SET_LOGIN";
  payload: string[];
}

export interface UserFullNameActionType {
  type: "SET_USER_FULL_NAME";
  payload: string[];
}

export const Actions = {
  SET_REGISTRATION: "SET_REGISTRATION",
  SET_LOGIN: "SET_LOGIN",
  SET_USER_FULL_NAME: "SET_USER_FULL_NAME",
  SET_AUTH_SUCCEEDED: "SET_AUTH_SUCCEEDED",
  SET_AUTH_FAILED: "SET_AUTH_FAILED",
  SET_IS_AUTHORIZING: "SET_IS_AUTHORIZING",
};

export type ActionTypes = RegistrationActionType | LoginActionType | UserFullNameActionType;
