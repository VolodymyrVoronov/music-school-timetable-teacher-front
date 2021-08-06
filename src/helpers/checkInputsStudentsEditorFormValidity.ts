export const checkInputsStudentsEditorFormValidity = (firstName: string, secondName: string) => {
  const loginToCheck = firstName.trim();
  const passwordToCheck = secondName.trim();
  if (loginToCheck.length >= 1 && passwordToCheck.length >= 1) {
    return true;
  } else {
    return false;
  }
};
