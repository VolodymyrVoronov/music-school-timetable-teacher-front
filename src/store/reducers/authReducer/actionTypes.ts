export interface RegistrationActionType {
  type: "SET_REGISTRATION";
  payload: string[];
}

export interface LoginActionType {
  type: "SET_LOGIN";
  payload: string[];
}

export const Actions = {
  SET_REGISTRATION: "SET_REGISTRATION",
  SET_LOGIN: "SET_LOGIN",
};

export type ActionTypes = RegistrationActionType | LoginActionType;
