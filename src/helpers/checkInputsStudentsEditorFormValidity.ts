export const checkInputsStudentsEditorFormValidity = (firstName: string, secondName: string, studentClass: string) => {
  const firstNameToCheck = firstName.trim();
  const secondNameToCheck = secondName.trim();
  const studentClassToCheck = studentClass;

  if (firstNameToCheck.length >= 1 && secondNameToCheck.length >= 1 && studentClassToCheck.length >= 1) {
    return true;
  } else {
    return false;
  }
};
