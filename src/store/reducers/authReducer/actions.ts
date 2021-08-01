import { Actions } from "./actionTypes";

import { login, registration } from "./../../../api/api";

type LoginData = {
  login: string;
  password: string;
};

type RegistrationData = {
  firstName?: string;
  secondName?: string;
  login: string;
  password: string;
  password2?: string;
};

type UserFullNameData = {
  firstName: string;
  secondName: string;
};

export const loginAC = (loginData: LoginData) => ({
  type: Actions.SET_LOGIN,
  payload: loginData,
});

export const registrationAC = (registrationData: RegistrationData) => ({
  type: Actions.SET_REGISTRATION,
  payload: registrationData,
});

export const setUserNameAC = (firstName: UserFullNameData, secondName: UserFullNameData) => ({
  type: Actions.SET_USER_FULL_NAME,
  payload: [firstName, secondName].join(" "),
});

export const isAuthorizingAC = (isAuthorizing: boolean) => ({
  type: Actions.SET_IS_AUTHORIZING,
  payload: isAuthorizing,
});

export const setLogin = (loginData: LoginData) => async (dispatch: any) => {
  console.log(loginData);

  try {
    dispatch(isAuthorizingAC(true));
    const response = await login(loginData);
    if (response.status === 200) {
      localStorage.setItem(`profile`, JSON.stringify(await { ...response.data }));
      dispatch(loginAC(response.data));
      dispatch(setUserNameAC(response.data.result.firstName, response.data.result.secondName));
      console.log(response.data);
      dispatch(isAuthorizingAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(isAuthorizingAC(false));
  }
};

export const setRegistration = (registrationData: RegistrationData) => async (dispatch: any) => {
  console.log(registrationData);

  try {
    const response = await registration(registrationData);
    if (response.status === 200) {
      localStorage.setItem(`profile`, JSON.stringify(await { ...response.data }));
      dispatch(registrationAC(response.data));

      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
