export const checkInputsStudentsEditorFormValidity = (firstName: string, secondName: string) => {
  const firstNameToCheck = firstName.trim();
  const secondNameToCheck = secondName.trim();
  if (firstNameToCheck.length >= 1 && secondNameToCheck.length >= 1) {
    return true;
  } else {
    return false;
  }
};
