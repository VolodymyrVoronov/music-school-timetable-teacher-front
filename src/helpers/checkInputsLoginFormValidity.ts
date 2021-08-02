export const checkInputsLoginFormValidity = (login: string, password: string) => {
  const loginToCheck = login.trim();
  const passwordToCheck = password.trim();
  if (loginToCheck.length >= 1 && passwordToCheck.length >= 1) {
    return true;
  } else {
    return false;
  }
};
