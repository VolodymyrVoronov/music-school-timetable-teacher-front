import { Dispatch } from "redux";
import { History } from "history";

import { login, registration } from "./../../../api/api";

import { Actions } from "./actionTypes";

interface LoginData {
  login: string;
  password: string;
}

interface RegistrationData {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
}

export const loginAC = (loginData: LoginData) => ({
  type: Actions.SET_LOGIN,
  payload: loginData,
});

export const logoutAC = () => ({
  type: Actions.SET_LOGOUT,
});

export const registrationAC = (registrationData: RegistrationData) => ({
  type: Actions.SET_REGISTRATION,
  payload: registrationData,
});

export const setUserNameAC = (firstName: string | undefined, secondName: string | undefined) => ({
  type: Actions.SET_USER_FULL_NAME,
  payload: [firstName, secondName].join(" "),
});

export const isAuthorizingAC = (isAuthorizing: boolean) => ({
  type: Actions.SET_IS_AUTHORIZING,
  payload: isAuthorizing,
});

export const isAuthorizingSucceessedAC = (isAuthorizingSucceed: boolean) => ({
  type: Actions.SET_AUTH_SUCCEED,
  payload: isAuthorizingSucceed,
});

export const isAuthorizingFailedAC = (isAuthorizingFailed: boolean) => ({
  type: Actions.SET_AUTH_FAILED,
  payload: isAuthorizingFailed,
});

export const setLogin = (loginData: LoginData, history: History) => async (dispatch: Dispatch) => {
  try {
    dispatch(isAuthorizingAC(true));
    const response = await login(loginData);
    if (response.status === 200) {
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

export const setRegistration = (registrationData: RegistrationData) => async (dispatch: Dispatch) => {
  try {
    dispatch(isAuthorizingAC(true));
    const response = await registration(registrationData);
    if (response.status === 200) {
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
