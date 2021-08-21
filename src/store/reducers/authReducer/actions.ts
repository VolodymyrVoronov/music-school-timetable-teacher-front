import { Dispatch, AnyAction } from "redux";
import { History } from "history";

import { login, registration } from "./../../../api/api";

import { typedAction } from "../helpers";

import {
  SET_LOGIN,
  SET_LOGOUT,
  SET_REGISTRATION,
  SET_USER_FULL_NAME,
  SET_AUTH_SUCCEED,
  SET_AUTH_FAILED,
  SET_IS_AUTHORIZING,
} from "./actionTypes";
import { AuthDataType } from "./authReducer";

import { NETWORK_STATUS } from "../../../const/const";

interface RegistrationData {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
}

export const loginAC = (loginData: AuthDataType) => typedAction(SET_LOGIN, { loginData });

export const logoutAC = () => typedAction(SET_LOGOUT);

export const registrationAC = (registrationData: AuthDataType) => typedAction(SET_REGISTRATION, { registrationData });

export const setUserNameAC = (firstName: string | undefined, secondName: string | undefined) =>
  typedAction(SET_USER_FULL_NAME, [firstName, secondName].join(" "));

export const isAuthorizingAC = (isAuthorizing: boolean) => typedAction(SET_IS_AUTHORIZING, { isAuthorizing });

export const isAuthorizingSucceessedAC = (isAuthorizingSucceed: boolean) =>
  typedAction(SET_AUTH_SUCCEED, { isAuthorizingSucceed });

export const isAuthorizingFailedAC = (isAuthorizingFailed: boolean) =>
  typedAction(SET_AUTH_FAILED, { isAuthorizingFailed });

export const setLogin =
  (loginData: { login: string; password: string }, history: History) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(isAuthorizingAC(true));
      const response = await login(loginData);
      if (response.status === NETWORK_STATUS.OK) {
        localStorage.setItem(`profile`, JSON.stringify(await { ...response.data }));
        dispatch(loginAC(response.data));
        dispatch(setUserNameAC(response.data.result.firstName, response.data.result.secondName));
        dispatch(isAuthorizingAC(false));
        dispatch(isAuthorizingSucceessedAC(true));
        dispatch(isAuthorizingFailedAC(false));
        history.replace("/account");
      }
    } catch (error) {
      console.log(error);
      dispatch(isAuthorizingAC(false));
      dispatch(isAuthorizingSucceessedAC(false));
      dispatch(isAuthorizingFailedAC(true));
    }
  };

export const setRegistration = (registrationData: RegistrationData) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(isAuthorizingAC(true));
    const response = await registration(registrationData);
    if (response.status === NETWORK_STATUS.OK) {
      localStorage.setItem(`profile`, JSON.stringify(await { ...response.data }));
      dispatch(registrationAC(response.data));
      dispatch(setUserNameAC(response.data.result.firstName, response.data.result.secondName));
      dispatch(isAuthorizingAC(false));
      dispatch(isAuthorizingSucceessedAC(true));
      dispatch(isAuthorizingFailedAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(isAuthorizingAC(false));
    dispatch(isAuthorizingSucceessedAC(false));
    dispatch(isAuthorizingFailedAC(true));
  }
};

export type ActionTypes = ReturnType<
  | typeof loginAC
  | typeof logoutAC
  | typeof registrationAC
  | typeof setUserNameAC
  | typeof isAuthorizingAC
  | typeof isAuthorizingSucceessedAC
  | typeof isAuthorizingFailedAC
>;
